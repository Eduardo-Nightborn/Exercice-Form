// types.ts
export interface FormData {
  personalInfo: PersonalInfo;
  professionalInfo : professionalInfo;
  accountInfo: accountInfo;
}

export interface PersonalInfo {
  // Step1 : personal informations
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phone: string;
  photo?: any;
}

export interface professionalInfo{
  //Step2 : professional informations
  educationLevel: string;
  yearsExperience: string;
  expertiseArea: string;
  professionalsURL: string;
}

export interface accountInfo{
  //Step3: Acount Info
  trainingType: string;
  interessedTechs: string[];
}

export interface Option {
  value: string;
  label: string;
}
