interface FormPageProps {
  params: {
    formId: string;
  };
}

const FormPage = ({ params }: FormPageProps) => {
  return (
    <div>
      <p className="font-medium text-lg">Form Id: {params.formId}</p>
    </div>
  );
};

export default FormPage;
