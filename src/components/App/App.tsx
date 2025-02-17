import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData } from "../../types/types";
import { Step1Form } from "../Step1Form";
import { Step2Form } from "../Step2Form";
import { Step3Form } from "../Step3Form";
import { Success } from "../Success";

const schema = z.object({
  firstName: z.string().min(1, { message: 'Le prénom est requis' }),
  lastName: z.string().min(1, { message: 'Le nom est requis' }),
  email: z.string().email({ message: 'Email invalide' }),
  birthDate: z.string().min(1, { message: 'La date de naissance est requise' }),
  phone: z.string().regex(/^(\+32|0)[1-9][0-9]{7,8}$/, { message: 'Numéro de téléphone belge invalide' }),
  photo: z.instanceof(FileList).refine(files => files.length > 0, { message: 'La photo de profil est requise' }),
  educationLevel: z.string().min(1, { message: 'Le niveau d\'études est requis' }),
  yearsExperience: z.string().min(1, { message: 'Le nombre d\'années d\'expérience est requis' }),
  expertiseArea: z.string().min(1, { message: 'Le domaine d\'expertise est requis' }),
  professionalsURL: z.array(z.string()).min(1, { message: 'L\'URL du portfolio est requise' }),
  trainingType: z.string().min(1, { message: 'Le type de formation est requis' }),
  interessedTechs: z.array(z.string()).min(1, { message: 'Les technologies d\'intérêt sont requises' }),
});


const App = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      phone: '',
      photo: undefined,
      educationLevel: '',
      yearsExperience: '',
      expertiseArea: '',
      professionalsURL: [],
      trainingType: '',
      interessedTechs: [],
    },
    resolver: zodResolver(schema), 
  });
  
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/step1" element={<Step1Form />} />
            <Route path="/step2" element={<Step2Form />} />
            <Route path="/step3" element={<Step3Form />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FormProvider>
  );
};

export default App;
