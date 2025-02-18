import { useNavigate } from "react-router-dom";
import { useForm, useFormContext, Controller } from "react-hook-form";
import { PersonalInfo, FormData } from "../../types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";


// Modify Zod schema to handle file validation
const schema = z.object({
  firstName: z.string().min(1, { message: "Le prénom est requis" }),
  lastName: z.string().min(1, { message: "Le nom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  birthDate: z.string().min(1, { message: "La date de naissance est requise" }),
  phone: z.string().regex(/^(\+32|0)[1-9][0-9]{7,8}$/, {
    message: "Numéro de téléphone belge invalide",
  }),
});

export const Step1Form = () => {
  const navigate = useNavigate();
  const { setValue } = useFormContext<FormData>();
  
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PersonalInfo>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: PersonalInfo) => {
    Object.keys(data).forEach((key) => {
      setValue(
        `personalInfo.${key as keyof PersonalInfo}`,
        data[key as keyof PersonalInfo]
      );
    });
    navigate("/step2");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Personal Information
        </h2>

        <div className="p-3 ">
          <Label htmlFor="email">First Name</Label>

          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="firstName"
                required
                placeholder="First Name"
              />
            )}
          />

          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div className="p-3 ">
          <Label htmlFor="email">Last Name</Label>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="lastName"
                required
                placeholder="Last Name"
              />
            )}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        <div className="p-3 ">
          <Label htmlFor="email">Email</Label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="email"
                required
                placeholder="Email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="p-3 ">
          <Label htmlFor="email">Birth Date</Label>

          <Controller
            control={control}
            name="birthDate"
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                id="birthDate"
                required
                placeholder="Birth Date"
              />
            )}
          />
          {errors.birthDate && (
            <p className="text-red-500 text-sm">{errors.birthDate.message}</p>
          )}
        </div>

        <div className="p-3 ">
          <Label htmlFor="email">Phone Number</Label>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                id="phone"
                required
                placeholder="Phone Number"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="p-3 ">
          <Label htmlFor="email">Profile Picture</Label>
          <Controller
            control={control}
            name="photo"
            render={({ field: { onChange } }) => (
              <Input
                type="file"
                id="photo"
                required
                placeholder="Profile Picture"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    onChange(e.target.files[0]);
                  }
                }}
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#16404D] text-white my-3 py-2 rounded-lg hover:bg-[#A6CDC6] transition duration-200 cursor-pointer"
        >
          Next
        </button>
        <Progress className="w-80 my-8 bg-white " value={33} />
      </form>

    </div>
  );
};
