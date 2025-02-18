import { useNavigate } from "react-router-dom";
import { useForm, useFormContext } from "react-hook-form";
import { TextInput } from "../TextInput";
import { SelectInput } from "../SelectInput";
import { Option, FormData, professionalInfo } from "../../types/types";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  educationLevel: z.string().min(0, { message: 'Le niveau d\'études est requis' }),
  yearsExperience: z.string().min(0, { message: 'Le nombre d\'années d\'expérience est requis' }),
  expertiseArea: z.string().min(0, { message: 'Le domaine d\'expertise est requis' }),
  professionalsURL: z.string(z.string().url({ message: 'L\'URL doit être valide' })).min(0, { message: 'L\'URL du portfolio est requise' }),
});


export const Step2Form = () => {
  const navigate = useNavigate();
  const { setValue } = useFormContext<FormData>();
  const { register, handleSubmit, formState: { errors } } = useForm<professionalInfo>({
    resolver:zodResolver(schema),
  })

  const onSubmit = (data: professionalInfo) => {
    Object.keys(data).forEach((key) => {
      setValue(`professionalInfo.${key as keyof professionalInfo}`, data[key as keyof professionalInfo]);
    });
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
          name="educationLevel"
          labeltxt="Education Level"
          required={true}
          register={register}
          options={educationLevels}
        />
        {errors.educationLevel && <p className="text-red-500 text-sm">{errors.educationLevel.message}</p>}
        <TextInput
          type="number"
          id="experience"
          name="yearsExperience"
          labeltxt="Years of Experience"
          required={true}
          register={register}
        />
        {errors.yearsExperience && <p className="text-red-500 text-sm">{errors.yearsExperience.message}</p>}
        <SelectInput
          id="expertiseArea"
          name="expertiseArea"
          labeltxt="Expertise Area"
          required={true}
          register={register}
          options={expertiseAreas}
        />
        {errors.expertiseArea && <p className="text-red-500 text-sm">{errors.expertiseArea.message}</p>}
        <TextInput
          type="text"
          id="professionalsURL"
          labeltxt="Professionals URls"
          name="professionalsURL"
          required={true}
          register={register}
        />
        {errors.professionalsURL && <p className="text-red-500 text-sm">{errors.professionalsURL.message}</p>}


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
