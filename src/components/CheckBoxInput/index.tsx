import { UseFormRegister } from 'react-hook-form';

interface CheckboxGroupProps {
  name: string;
  options: { label: string; value: string }[];
  required: boolean;
  register: UseFormRegister<any>;
}

export const CheckboxInput= ({ name, options, required, register }: CheckboxGroupProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium">
        {name.charAt(0).toUpperCase() + name.slice(1)} :
      </label>
      <div className="mt-2 space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="checkbox"
              id={option.value}
              value={option.value}
              {...register(name, { required })}
              className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor={option.value} className="ml-2 text-gray-700 font-medium">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
