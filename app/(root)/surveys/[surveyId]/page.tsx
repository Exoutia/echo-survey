interface SurveyPageProps {
  params: {
    surveyId: string;
  };
}

const SurveyPage = ({ params }: SurveyPageProps) => {
  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">Survey Id: {params.surveyId}</p>
      <p className="text-2xl">
        Here you can edit your survey. It is yet to be implemented
      </p>
    </div>
  );
};

export default SurveyPage;
