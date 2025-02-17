import { useNavigate } from "react-router-dom";
import { TextInput } from "../TextInput";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/types";

export const Step1Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useFormContext<FormData>();


  const onSubmit = (data: FormData) => {
    alert("Test!!!");
    console.log(data);  
    navigate('/step2'); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Personal Information
        </h2>

        <div>
          <TextInput
            type="text"
            id="firstName"
            name="firstName"
            required={true}
            register={register}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div>
          <TextInput
            type="text"
            id="lastName"
            name="lastName"
            required={true}
            register={register}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <div>
          <TextInput
            type="email"
            id="email"
            name="email"
            required={true}
            register={register}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <TextInput
            type="date"
            id="birthDate"
            name="birthDate"
            required={true}
            register={register}
          />
          {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate.message}</p>}
        </div>

        <div>
          <TextInput
            type="tel"
            id="phone"
            name="phone"
            required={true}
            register={register}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <TextInput
            type="file"
            id="photo"
            name="photo"
            required={true}
            register={register}
          />
          {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
        >
          Next
        </button>
      </form>
    </div>
  );
};
