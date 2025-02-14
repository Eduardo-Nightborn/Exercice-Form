
import { useState } from "react";
import {
  getFormDataFromUrl,
} from "../utils/querryParams";

export const Success = () => {
  const [formData, setFormData] = useState(() => getFormDataFromUrl());

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-gray-800 p-6">
      <h1 className="text-2xl font-semibold text-center my-4 text-white">Your account has been created successfully</h1>
      <h2 className="text-xl font-semibold text-center my-4 text-white">Informations Personnelles</h2>
      <p className="text-white">First Name: {formData.firstName}</p>
      <p className="text-white">Last Name: {formData.lastName}</p>
      <p className="text-white">Email: {formData.email}</p>
      <h2 className="text-xl font-semibold text-center my-4 text-white">Adresse</h2>
      <p className="text-white">Street: {formData.street}</p>
      <p className="text-white">City: {formData.city}</p>
      <p className="text-white">Zip Code: {formData.zipCode}</p>
      <h2 className="text-xl font-semibold text-center my-4 text-white ">Compte</h2>
      <p className="text-white">Username: {formData.username}</p>
      <p className="text-white">Password: {formData.password}</p>
    </div>
  );
};
