"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const createSurvey = async (name: string, description: string) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return {
        error: {
          message: "Unauthenticated",
        },
      };
    }

    const defaultTitle = name;
    const defaultDescription = description;

    const survey = await db.survey.create({
      data: {
        name: defaultTitle,
        creatorId: userId,
        description: defaultDescription,
      },
    });

    revalidatePath(`/surveys`);

    return {
      success: {
        survey,
        message: "Survey created.",
      },
    };
  } catch (err) {
    console.log("ERROR - CREATE_SURVEY", err);
    return {
      error: {
        message: "Something went wrong!",
      },
    };
  }
};
