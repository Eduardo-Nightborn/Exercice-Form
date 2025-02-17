import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../TextInput";
import { SelectInput } from "../SelectInput";
import { Option } from "../../types/types";

export const Step2Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useFormContext<FormData>();

  const onSubmit = (data: Partial<FormData>) => {
    navigate('/step3');
  };

  const educationLevels: Option[] = [
    { value: "Bac", label: "Bac" },
    { value: "Bac+2", label: "Bac+2" },
    { value: "Bac+3", label: "Bac+3" },
    { value: "Bac+4", label: "Bac+4" },
    { value: "Bac+5", label: "Bac+5" },
    { value: "Autre", label: "Autre" },
  ];

  const expertiseAreas: Option[] = [
    { value: "Frontend", label: "Développement Frontend" },
    { value: "Backend", label: "Développement Backend" },
    { value: "Devops", label: "Devops" },
    { value: "Fullstack", label: "Fullstack" },
    { value: "ui/ux", label: "UI/UX" },
    { value: "ProjectManagent", label: "Project Management" },
    { value: "DataScience", label: "Data Science" },
  ];


  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Professional Information
        </h2>

        <SelectInput
          id="educationLevel"
          name="Education Level"
          required={true}
          register={register}
          options={educationLevels}
        />
        <TextInput
          type="number"
          id="experience"
          name="Years of Experience"
          required={true}
          register={register}
        />
        <SelectInput
          id="expertiseArea"
          name="Expertise Area"
          required={true}
          register={register}
          options={expertiseAreas}
        />

        <TextInput
          type="text"
          id="professionalsURL"
          name="Professionals URL"
          required={true}
          register={register}
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Next
        </button>
      </form>
    </div>
  );
};
