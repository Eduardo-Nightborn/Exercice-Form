interface RadioInputProps {
    name: string;
    options: { label: string; value: string }[];
    required: boolean;
    selectedValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const RadioInput = ({
    name,
    options,
    required,
    selectedValue,
    onChange,
  }: RadioInputProps) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-medium">
          {name.charAt(0).toUpperCase() + name.slice(1)} :
        </label>
        <div className="mt-2 space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={onChange}
                required={required}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor={option.value}
                className="ml-2 text-gray-700 font-medium"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  