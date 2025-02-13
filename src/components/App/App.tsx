import { TextInput } from '../TextInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phone: string;
  photo: FileList;
};

const schema = z.object({
  firstName: z.string().min(1, { message: 'Le prénom est requis' }),
  lastName: z.string().min(1, { message: 'Le nom est requis' }),
  email: z.string().email({ message: 'Email invalide' }),
  birthDate: z.string().min(1, { message: 'La date de naissance est requise' }),
  phone: z.string().regex(/^(\+32|0)[1-9][0-9]{7,8}$/, { message: 'Numéro de téléphone belge invalide' }),
  photo: z.instanceof(FileList).refine(files => files.length > 0, { message: 'La photo de profil est requise' }),
});

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(`Données envoyées:\n
    Prénom: ${data.firstName}\n
    Nom: ${data.lastName}\n
    Email: ${data.email}\n
    Date de naissance: ${data.birthDate}\n
    Téléphone: ${data.phone}\n
    Photo: ${data.photo[0].name}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Forms</h2>

        <TextInput
          type='text'
          id='prenom'
          name='firstName'
          required={true}
          register={register} 
        />
        {errors ? <p className="text-red-500 text-sm">{errors.firstName?.message}</p> : null}
        <TextInput
          type='text'
          id='nom'
          name='lastName'
          required={true}
          register={register}
        />
        {errors ? <p className="text-red-500 text-sm">{errors.lastName?.message}</p> : null}
        <TextInput
          type='email'
          id='email'
          name='email'
          required={true}
          register={register}
        />
        {errors ? <p className="text-red-500 text-sm">{errors.email?.message}</p> : null}
        <TextInput
          type='date'
          id='date'
          name='birthDate'
          required={true}
          register={register}
        />
        {errors ? <p className="text-red-500 text-sm">{errors.birthDate?.message}</p> : null}
        <TextInput
          type='tel'
          id='telephone'
          name='phone'
          required={true}
          register={register}
        />
        {errors ? <p className="text-red-500 text-sm">{errors.phone?.message}</p> : null}
        <TextInput
          type='file'
          id='photo'
          name='photo'
          required={true}
          register={register}
        />
        {errors ? <p className="text-red-500 text-sm">{errors.photo?.message}</p> : null}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default App;
