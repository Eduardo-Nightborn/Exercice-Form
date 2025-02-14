import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getFormDataFromUrl,
  createUrlWithFormData,
} from "../utils/querryParams";
import { TextInput } from "../TextInput";

export const Step1Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => getFormDataFromUrl());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createUrlWithFormData(formData);
    navigate(`/step2${url}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Personal Information</h2>

        <TextInput
          type="text"
          id="prenom"
          name="First Name"
          required={true}
          value={formData.firstName || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              firstName: e.target.value,
            })
          }
        />
        <TextInput
          type="text"
          id="lastName"
          name="Last Name"
          required={true}
          value={formData.lastName || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              lastName: e.target.value,
            })
          }
        />
        <TextInput
          type="email"
          id="email"
          name="email"
          required={true}
          value={formData.email || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
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
