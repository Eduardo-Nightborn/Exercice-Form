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

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const verifyEmail = (email: any) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (re.test(email)) {
      setIsError(false);
      setErrorMessage("");
      return true;
    }
    setIsError(true);
    setErrorMessage("Invalid email format");
    return false;
  };

  const verifyTel = (tel: any) => {
    const re = /^(\+32|0)[1-9][0-9]{7,8}$/;
    if (re.test(tel)) {
      setIsError(false);
      setErrorMessage("");
      return true;
    }
    setIsError(true);
    setErrorMessage("Invalid phone number format");
    return false;
  };

  const verifyImg = (file: any) => {
    const validExtensions = ["image/jpeg", "image/png"];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    if (!validExtensions.includes(file.type)) {
      setIsError(true);
      setErrorMessage("Invalid image");
      return false;
    }
    if (file.size > maxSizeInBytes) {
      setIsError(true);
      setErrorMessage("Image too large");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyEmail(formData.email)) {
      console.log(formData.email + "invalide !!");
      return;
    }
    if (formData.firstName === "") {
      setIsError(true);
      setErrorMessage("First name is required");
      return;
    }
    if (formData.lastName === "") {
      setIsError(true);
      setErrorMessage("Last name is required");
      return;
    }
    if (!verifyTel(formData.phone)) {
      console.log(formData.phone + "invalide !!");
      return;
    }
    if (!verifyImg(formData.photo)) {
      console.log(formData.photo + "invalide !!");
      return;
    }

    const url = createUrlWithFormData(formData);
    navigate(`/step2${url}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Personal Information
        </h2>

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
        <TextInput
          type="date"
          id="date"
          name="date"
          required={true}
          value={formData.birthDate || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              birthDate: e.target.value,
            })
          }
        />
        <TextInput
          type="tel"
          id="telephone"
          name="Phone Number"
          required={true}
          value={formData.phone || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />
        <TextInput
          type="file"
          id="photo"
          name="Profile Picture"
          required={true}
          onChange={(e) =>
            setFormData({
              ...formData,
              photo: e.target.files?.[0] || undefined,
            })
          }
        />
        {isError ? (
          <p className="text-red-500 text-center">{errorMessage}</p>
        ) : null}
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
