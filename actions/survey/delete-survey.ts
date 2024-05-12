"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteSurvey = async (surveyId: string) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return {
        error: {
          message: "Unauthenticated",
        },
      };
    }

    const survey = await db.survey.findUnique({
      where: { id: surveyId },
    });

    if (!survey) {
      return {
        error: {
          message: "Survey not found!",
        },
      };
    }

    // This means that the survey doesn't belongs to that user
    if (survey.creatorId !== userId) {
      return {
        error: {
          message: "Unauthorized",
        },
      };
    }

    await db.survey.delete({
      where: { id: surveyId },
    });

    revalidatePath(`/surveys`);

    return {
      success: {
        message: "Survey deleted.",
      },
    };
  } catch (err) {
    return {
      error: {
        message: "Something went wrong!",
      },
    };
  }
};
