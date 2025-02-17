import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/types";

export const Success = () => {
  const { getValues } = useFormContext<FormData>();
  const formData = getValues();

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-gray-800 p-6">
      <h1 className="text-2xl font-semibold text-center my-4 text-white">Forms completed successfully</h1>
      <h2 className="text-xl font-semibold text-center my-4 text-white">Personal informations</h2>
      <p className="text-white">First Name: {formData.firstName}</p>
      <p className="text-white">Last Name: {formData.lastName}</p>
      <p className="text-white">Email: {formData.email}</p>
      <p className="text-white">Birth Date: {formData.birthDate}</p>
      <p className="text-white">Phone: {formData.phone}</p>
      <p className="text-white">Photo: <img src={formData.photo[0].name || null} alt="User uploaded photo" className="max-w-xs mt-2" /></p>
      <h2 className="text-xl font-semibold text-center my-4 text-white">Professional informations</h2>
      <p className="text-white">Education Level: {formData.educationLevel}</p>
      <p className="text-white">Years of Experience: {formData.yearsExperience}</p>
      <p className="text-white">Expertise Area: {formData.expertiseArea}</p>
      <p className="text-white">Professionals URL: {formData.professionalsURL}</p>
      <h2 className="text-xl font-semibold text-center my-4 text-white ">Training preferences</h2>
      <p className="text-white">Training Type: {formData.trainingType}</p>
      <p className="text-white">Technologies: {formData.interessedTechs}</p>
    </div>
  );
};
