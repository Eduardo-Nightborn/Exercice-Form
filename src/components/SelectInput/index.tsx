import { Option } from "../../types/types";
import { UseFormRegister } from 'react-hook-form';

interface SelectInputProps {
  id: string;
  name: string;
  required: boolean;
  register: UseFormRegister<any>; 
  options: Option[];
}

export const SelectInput = ({id,name,required,register,options}: SelectInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="select">{name}</label>
      <select id={id} required={required}  {...register(name, { required })}
        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
      >
        <option value="">Select an {name}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
