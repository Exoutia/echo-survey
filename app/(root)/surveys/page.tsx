import { db } from "@/lib/db";
import { Heading } from "@/components/heading";
import { SurveyCard } from "@/components/survey-card";

import { CreateSurveyButton } from "./_components/create-survey-btn";

const SurveysPage = async () => {
  const surveys = await db.survey.findMany({});

  return (
    <div className="pt-2 space-y-8">
      <Heading
        title="My Surveys"
        subtitle="Create and manage all of your survyes here"
        className="max-sm:text-center pb-4 border-b-2"
      />

      <>
        {surveys.length === 0 ? (
          <p className="text-xl max-sm:text-center">No surveys found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 pb-20">
            {surveys.map((survey) => (
              <SurveyCard key={survey.id} survey={survey} />
            ))}
          </div>
        )}
      </>

      <div className="absolute pb-4 pr-4 pt-2 bottom-0 left-0 right-4 flex justify-end bg-background/80">
        <CreateSurveyButton />
      </div>
    </div>
  );
};

export default SurveysPage;
