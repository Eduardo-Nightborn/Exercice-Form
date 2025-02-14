// types.ts
export interface FormData {
    //personal informations
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    phone: string;
    photo: File;
    //professional informations
    educationLevel: string;
    yearsExperience: string;
    expertiseArea: string;
    professionalsURL: string[];

    //info compte
    trainingType: string;
    interessedTechs: string[];
    }

    export interface Option {
        value: string;
        label: string;
      }