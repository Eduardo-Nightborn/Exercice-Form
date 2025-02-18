import { useNavigate } from "react-router-dom";
import { useForm, useFormContext, Controller } from "react-hook-form";
import { accountInfo, FormData } from "../../types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Progress } from "@/components/ui/progress";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const schema = z.object({
  trainingType: z
    .string()
    .min(1, { message: "Le type de formation est requis" }),
  interessedTechs: z
    .array(z.string())
    .min(1, { message: "Les technologies d'intérêt sont requises" }),
});

export const Step3Form = () => {
  const navigate = useNavigate();
  const { setValue } = useFormContext<FormData>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<accountInfo>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: accountInfo) => {
    Object.keys(data).forEach((key) => {
      setValue(
        `accountInfo.${key as keyof accountInfo}`,
        data[key as keyof accountInfo]
      );
    });
    navigate("/success");
  };

  const trainingTypes = [
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
    { value: "weekends", label: "Week-Ends" },
  ];

  const techs = [
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Training Preferences
        </h2>

        {/* Training Type */}
        <div className="flex flex-col items-center justify-center my-3">
          <FormField
            control={control}
            name="trainingType"
            defaultValue=""
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-3">
                <FormLabel className="text-base">Training Types</FormLabel>
                <FormControl className="flex flex-row items-start space-x-3 space-y-0">
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    {trainingTypes.map((option) => (
                      <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={option.value} />
                        </FormControl>
                        <FormLabel className="font-normal">{option.label}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {errors.trainingType && (
            <p className="text-red-500 text-sm">{errors.trainingType.message}</p>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-col items-center justify-center my-3">
          <FormField
            control={control}
            name="interessedTechs"
            defaultValue={[]}
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Technologies of interest</FormLabel>
                  <FormDescription>
                  Select the technologies you are interested in
                  </FormDescription>
                </div>
                {techs.map((item) => (
                  <FormItem
                    key={item.value} 
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value.includes(item.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, item.value]);
                          } else {
                            field.onChange(field.value.filter((value) => value !== item.value));
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                  </FormItem>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#16404D] text-white my-3 py-2 rounded-lg hover:bg-[#A6CDC6] transition duration-200 cursor-pointer"
        >
          Finish
        </button>
        <Progress className="w-80 my-8" value={100} />
      </form>
    </div>
            
  );
};
