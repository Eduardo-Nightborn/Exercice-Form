import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getFormDataFromUrl,
  createUrlWithFormData,
} from "../utils/querryParams";
import { RadioInput } from "../RadioInput";
import { CheckboxGroup } from "../CheckBoxInput";


export const Step3Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => getFormDataFromUrl());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createUrlWithFormData(formData);
    navigate(`/success${url}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Training Preferences
        </h2>

        <RadioInput
          name="Training Type"
          options={[
            { value: "full-time", label: "Full Time" },
            { value: "part-time", label: "Part Time" },
            { value: "weekends", label: "Weekends" },
          ]}
          required={true}
          selectedValue={formData.trainingType}
          onChange={(e) =>
            setFormData({
              ...formData,
              trainingType: e.target.value,
            })
          }
        />

        <CheckboxGroup
          name="Technologies"
          options={[
            { value: "React", label: "React" },
            { value: "Node.js", label: "Node.js" },
            { value: "Python", label: "Python" },
            { value: "Java", label: "Java" },
          ]}
          selectedValues={formData.interessedTechs || []}
          onChange={(value) =>
            setFormData({
              ...formData,
              interessedTechs: [...(formData.interessedTechs || []), value],
            })
          }
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
