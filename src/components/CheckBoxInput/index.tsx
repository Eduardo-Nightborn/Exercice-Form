

interface CheckboxGroupProps {
    name: string;
    options: { label: string; value: string }[];
    selectedValues: string[];
    onChange: (value: string) => void;
  }
  
  export const CheckboxGroup = ({
    name,
    options,
    selectedValues,
    onChange,
  }: CheckboxGroupProps) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-medium">
          {name}
        </label>
        <div className="mt-2 space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={option.value}
                name={name}
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={() => onChange(option.value)}
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
  