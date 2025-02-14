import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getFormDataFromUrl,
  createUrlWithFormData,
} from "../utils/querryParams";
import { TextInput } from "../TextInput";
import { SelectInput } from "../SelectInput";
import { Option } from "../../types/types";

export const Step2Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => getFormDataFromUrl());
  const [error, setError] = useState("");
  const [messageError, setMessageError] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = formData.professionalsURL?.[0];
    if (!url || !isValidURL(url)) {
      return;
    }
    
    const urlParams = createUrlWithFormData(formData);
    navigate(`/step3${urlParams}`);
  };

  const isValidURL = (url: string) => {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if(!regex.test(url)){
      setError("Invalid URL");
      setMessageError("Please enter a valid URL");
      return false;
    }
    return true;
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Professional Information
        </h2>

        <SelectInput
          id="educationLevel"
          name="Education Level"
          required={true}
          value={formData.educationLevel || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              educationLevel: e.target.value,
            })
          }
          options={educationLevels}
        />
        <TextInput
          type="number"
          id="experience"
          name="Years of Experience"
          required={true}
          value={formData.yearsExperience || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              yearsExperience: e.target.value,
            })
          }
        />
        <SelectInput
          id="expertiseArea"
          name="Expertise Area"
          required={true}
          value={formData.expertiseArea || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              expertiseArea: e.target.value,
            })
          }
          options={expertiseAreas}
        />
        <TextInput
          type="text"
          id="professionalsURL"
          name="Professionals URL"
          required={true}
          value={formData.professionalsURL?.[0] || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              professionalsURL: [...(formData.professionalsURL || []), e.target.value],
            })
          }
        />
        {error && <p className="text-red-500">{messageError}</p>}
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
