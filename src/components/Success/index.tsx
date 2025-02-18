import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/types";

export const Success = () => {
  const { getValues, handleSubmit } = useFormContext<FormData>();
  const formData = getValues();

  const onSubmit = (data: FormData) => {
    alert("Form Data validated and submitted: " + JSON.stringify(data));
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-white p-6 ">
      <h1 className="text-2xl font-semibold text-center my-4 text-[#16404D]">Forms completed successfully</h1>

      <h2 className="text-xl font-semibold text-center my-4 text-[#16404D]">Personal informations</h2>
      {formData.personalInfo.photo && formData.personalInfo.photo[0] && (
        <img
        src={URL.createObjectURL(formData.personalInfo.photo[0])}
        alt="Uploaded"
        className="w-32 h-32 rounded-full object-cover"
      />
      )}
      <p className="text-[#16404D]">First Name: {formData.personalInfo.firstName}</p>
      <p className="text-[#16404D]">Last Name: {formData.personalInfo.lastName}</p>
      <p className="text-[#16404D]">Email: {formData.personalInfo.email}</p>
      <p className="text-[#16404D]">Birth Date: {formData.personalInfo.birthDate}</p>
      <p className="text-[#16404D]">Phone: {formData.personalInfo.phone}</p>
     
      

      <h2 className="text-xl font-semibold text-center my-4 text-[#16404D]">Professional informations</h2>
      <p className="text-[#16404D]">Education Level: {formData.professionalInfo.educationLevel}</p>
      <p className="text-[#16404D]">Years of Experience: {formData.professionalInfo.yearsExperience}</p>
      <p className="text-[#16404D]">Expertise Area: {formData.professionalInfo.expertiseArea}</p>
      <p className="text-[#16404D]">Professionals URL: {formData.professionalInfo.professionalsURL}</p>

      <h2 className="text-xl font-semibold text-center my-4 text-[#16404D]">Training preferences</h2>
      <p className="text-[#16404D]">Training Type: {formData.accountInfo.trainingType}</p>
      <p className="text-[#16404D]">Technologies: {formData.accountInfo.interessedTechs}</p>

      {/* Validate button */}
      <button
        type="button"
        onClick={handleSubmit(onSubmit)} // Handle form submit
        className="w-75 bg-[#16404D] text-white my-3 py-2 rounded-lg hover:bg-[#A6CDC6] transition duration-200 cursor-pointer"
      >
        Validate and Submit
      </button>
    </div>
  );
};
