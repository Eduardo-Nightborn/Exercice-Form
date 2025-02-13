import { useState } from 'react'
import { TextInput } from './../TextInput/index';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState<File | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!verifyEmail(email)){
      alert('Email invalide');
      return;
    }
    if(!verifyTel(phone)){
      alert('Téléphone invalide');
      return;
    }
    if(picture && !verifyImgSize(picture)){
      alert('Image invalide');
      return;
    }

    alert(`Formulaire envoyé avec les informations suivantes :
    Prénom: ${firstName}
    Nom: ${lastname}
    Email: ${email}
    Date de naissance: ${birthDate}
    Téléphone: ${phone}
    Photo: ${picture ? picture.name : 'Aucune'}`);

    console.log({
      firstName,
      lastname,
      email,
      birthDate,
      phone,
      picture,
    });

    setFirstName("");
    setLastname("");
    setEmail("");
    setBirthDate("");
    setPhone("");
    setPicture(null); 
  };


  const verifyEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const verifyTel = (tel: string) => {
    const re = /^(\+32|0)[1-9][0-9]{7,8}$/;
    return re.test(tel);
  };

  const verifyImgSize = (file: File) => {
    const validExtensions = ['image/jpeg', 'image/png'];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    if (!validExtensions.includes(file.type)) {
      return false;
    }
    if (file.size > maxSizeInBytes) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Formulaire</h2>

        <TextInput
          type='text'
          id='prenom'
          name='prenom'
          required={true}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          type='text'
          id='nom'
          name='nom'
          required={true}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextInput
          type='email'
          id='email'
          name='email'
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type='date'
          id='date'
          name='date'
          required={true}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <TextInput
          type='tel'
          id='telephone'
          name='telephone'
          required={true}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextInput
          type='file'
          id='photo'
          name='photo'
          required={true}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setPicture(e.target.files[0]);
            }
          }} 
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};
export default App
