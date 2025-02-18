import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { Option, FormData, professionalInfo } from "../../types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Progress } from "@/components/ui/progress"


const schema = z.object({
  educationLevel: z
    .string()
    .min(0, { message: "Le niveau d'études est requis" }),
  yearsExperience: z
    .string()
    .min(0, { message: "Le nombre d'années d'expérience est requis" }),
  expertiseArea: z
    .string()
    .min(0, { message: "Le domaine d'expertise est requis" }),
  professionalsURL: z
    .string(z.string().url({ message: "L'URL doit être valide" }))
    .min(0, { message: "L'URL du portfolio est requise" }),
});

export const Step2Form = () => {
  const navigate = useNavigate();
  const { setValue } = useFormContext<FormData>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<professionalInfo>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: professionalInfo) => {
    alert(JSON.stringify(data));
    Object.keys(data).forEach((key) => {
      setValue(
        `professionalInfo.${key as keyof professionalInfo}`,
        data[key as keyof professionalInfo]
      );
    });
    navigate("/step3");
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
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md justify-center items-center"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Professional Information
        </h2>
        <div className="flex flex-col items-center justify-center my-3 ">
          <FormField
            control={control}
            name="educationLevel"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Education Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-70">
                      <SelectValue placeholder="Select an education level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {educationLevels.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="w-full mt-1 my-3 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {errors.educationLevel && (
            <p className="text-red-500 text-sm">
              {errors.educationLevel.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center  my-3 ">
          <Controller
            control={control}
            name="yearsExperience"
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                id="yearsExperience"
                required
                placeholder="Years of Experience"
                className="w-70"
              />
            )}
          />
          {errors.yearsExperience && (
            <p className="text-red-500 text-sm">
              {errors.yearsExperience.message}
            </p>
          )}
        </div>
         <div className="flex flex-col items-center justify-center my-3 ">
          <FormField
            control={control}
            name="expertiseArea"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expertise Area</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-70">
                      <SelectValue placeholder="Select an Expertise Area" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {expertiseAreas.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="w-full mt-1 my-3 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {errors.educationLevel && (
            <p className="text-red-500 text-sm">
              {errors.educationLevel.message}
            </p>
          )}
        </div>

        <div className="flex flex-col items-center justify-center  my-3 ">
          <Controller
            control={control}
            name="professionalsURL"
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="professionalsURL"
                required
                placeholder="Professionals URls"
                className="w-70"
              />
            )}
          />
          {errors.professionalsURL && (
            <p className="text-red-500 text-sm">
              {errors.professionalsURL.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#16404D] text-white my-3 py-2 rounded-lg hover:bg-[#A6CDC6] transition duration-200 cursor-pointer"
        >
          Next
        </button>
        <Progress className="w-80 my-8" value={66} />
      </form>



    </div>
  );
};
