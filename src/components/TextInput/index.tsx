import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  id: string;
  name: string;
  required: boolean;
  register: UseFormRegister<any>; 
}

export const TextInput = ({ type, id, name, required, register }: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {name.charAt(0).toUpperCase() + name.slice(1)} :
      </label>
      <input
        type={type}
        id={id}
        required={required ? true : undefined}
        {...register(name, { required })}
        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};