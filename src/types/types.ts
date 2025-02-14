// types.ts
export interface FormData {
    // Step 1: Personal Details
    firstName: string;
    lastName: string;
    email: string;
    // Step 2: Address
    street: string;
    city: string;
    zipCode: string;
    // Step 3: Account
    username: string;
    password: string;
    }