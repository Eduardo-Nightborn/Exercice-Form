import { Option } from "../../types/types";

interface SelectInputProps {
  id: string;
  name: string;
  required: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const SelectInput = ({id,name,required,value,onChange,options}: SelectInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="select">{name}</label>
      <select id={id} name={name} required={required} value={value} onChange={onChange}
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
