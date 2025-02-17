import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/types";
import { RadioInput } from "../RadioInput";
import { CheckboxInput } from "../CheckBoxInput";


export const Step3Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useFormContext<FormData>();

  const onSubmit = (data: Partial<FormData>) => {
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
          options={[
            { value: "full-time", label: "Full Time" },
            { value: "part-time", label: "Part Time" },
            { value: "weekends", label: "Weekends" },
          ]}
          required={true}
          register={register}
        />

        <CheckboxInput
          name="tec"
          required={true}
          options={[
            { value: "React", label: "React" },
            { value: "Node.js", label: "Node.js" },
            { value: "Python", label: "Python" },
            { value: "Java", label: "Java" },
          ]}
         register={register}
        />
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
