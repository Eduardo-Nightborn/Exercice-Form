
interface InputProps {
    type: string;
    id: string;
    name: string;
    required: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({type ,id , name , required , value , onChange} : InputProps) => {

    return(
        <div className="mb-4">
        <label htmlFor="prenom" className="block text-gray-700 font-medium">
        {name.charAt(0).toUpperCase() + name.slice(1)} :
        </label>
        <input
          type={type}
          id={id}
          name={name}
          required={required ? true : undefined}
          value={value}
          onChange={onChange}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    )
}