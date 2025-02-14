import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getFormDataFromUrl,
  createUrlWithFormData,
} from "../utils/querryParams";
import { TextInput } from "../TextInput";

export const Step3Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => getFormDataFromUrl());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createUrlWithFormData(formData);
    navigate(`/success${url}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Adress Information</h2>

        <TextInput
          type="text"
          id="username"
          name="username"
          required={true}
          value={formData.username || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />
        <TextInput
          type="password"
          id="password"
          name="password"
          required={true}
          value={formData.password || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
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
