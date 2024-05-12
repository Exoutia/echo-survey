interface SurveyPageProps {
  params: {
    surveyId: string;
  };
}

const SurveyPage = ({ params }: SurveyPageProps) => {
  return (
    <div>
      <p className="text-2xl">Survey Id: {params.surveyId}</p>
    </div>
  );
};

export default SurveyPage;
