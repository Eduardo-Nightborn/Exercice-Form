import { useNavigate } from "react-router-dom";
import { useForm, useFormContext } from "react-hook-form";
import { accountInfo, FormData } from "../../types/types";
import { RadioInput } from "../RadioInput";
import { CheckboxInput } from "../CheckBoxInput";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  trainingType: z.string().min(1, { message: 'Le type de formation est requis' }),
  interessedTechs: z.array(z.string()).min(1, { message: 'Les technologies d\'intérêt sont requises' }),
});

export const Step3Form = () => {
  const navigate = useNavigate();
  const { setValue } = useFormContext<FormData>();
  const { register, handleSubmit, formState: { errors } } = useForm<accountInfo>({
    resolver:zodResolver(schema),
  })

  const onSubmit = (data: accountInfo) => {
    Object.keys(data).forEach((key) => {
      setValue(`accountInfo.${key as keyof accountInfo}`, data[key as keyof accountInfo]);
    });
    navigate('/success');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Training Preferences
        </h2>

        <RadioInput
          name="trainingType"
          labeltxt="Training Type"
          options={[
            { value: "full-time", label: "Full Time" },
            { value: "part-time", label: "Part Time" },
            { value: "weekends", label: "Weekends" },
          ]}
          required={true}
          register={register}
        />
        {errors.trainingType && <p className="text-red-500 text-sm">{errors.trainingType.message}</p>}

        <CheckboxInput
          name="interessedTechs"
          labeltxt="Interessed Technologies"
          required={true}
          options={[
            { value: "React", label: "React" },
            { value: "Node.js", label: "Node.js" },
            { value: "Python", label: "Python" },
            { value: "Java", label: "Java" },
          ]}
         register={register}
        />
        {errors.interessedTechs && <p className="text-red-500 text-sm">{errors.interessedTechs.message}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Finish
        </button>
      </form>
    </div>
  );
};
