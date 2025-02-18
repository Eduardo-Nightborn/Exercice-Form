import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/types";

export const Success = () => {
  const { getValues, handleSubmit } = useFormContext<FormData>();
  const formData = getValues();

  const onSubmit = (data: FormData) => {
    console.log("Form Data validated and submitted:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-gray-800 p-6">
      <h1 className="text-2xl font-semibold text-center my-4 text-white">Forms completed successfully</h1>

      <h2 className="text-xl font-semibold text-center my-4 text-white">Personal informations</h2>
      {formData.personalInfo.photo && formData.personalInfo.photo[0] && (
        <img
        src={URL.createObjectURL(formData.personalInfo.photo[0])}
        alt="Uploaded"
        className="w-32 h-32 rounded-full object-cover"
      />
      )}
      <p className="text-white">First Name: {formData.personalInfo.firstName}</p>
      <p className="text-white">Last Name: {formData.personalInfo.lastName}</p>
      <p className="text-white">Email: {formData.personalInfo.email}</p>
      <p className="text-white">Birth Date: {formData.personalInfo.birthDate}</p>
      <p className="text-white">Phone: {formData.personalInfo.phone}</p>
     
      

      <h2 className="text-xl font-semibold text-center my-4 text-white">Professional informations</h2>
      <p className="text-white">Education Level: {formData.professionalInfo.educationLevel}</p>
      <p className="text-white">Years of Experience: {formData.professionalInfo.yearsExperience}</p>
      <p className="text-white">Expertise Area: {formData.professionalInfo.expertiseArea}</p>
      <p className="text-white">Professionals URL: {formData.professionalInfo.professionalsURL}</p>

      <h2 className="text-xl font-semibold text-center my-4 text-white">Training preferences</h2>
      <p className="text-white">Training Type: {formData.accountInfo.trainingType}</p>
      <p className="text-white">Technologies: {formData.accountInfo.interessedTechs}</p>

      {/* Validate button */}
      <button
        type="button"
        onClick={handleSubmit(onSubmit)} // Handle form submit
        className="mt-6 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Validate and Submit
      </button>
    </div>
  );
};
