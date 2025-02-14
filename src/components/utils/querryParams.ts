import { FormData } from '../../types/types';

// utils/queryParams.ts
export const getFormDataFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const formData: Partial<FormData> = {};
    // Convert URL parameters back to form data
    params.forEach((value, key) => {
        formData[key as keyof FormData] = value;
    });
    return formData;
};

export const createUrlWithFormData = (formData: Record<string, string>) => {
    const params = new URLSearchParams();
    // Add each form field to URL parameters
    Object.entries(formData).forEach(([key, value]) => {
        if (value) {
            params.set(key, value);
        }
    });
    return `?${params.toString()}`;
};