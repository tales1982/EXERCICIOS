import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface RegisterReturnInput {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

interface RegisterReturnCheckbox {
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface UseFormReturn<T> {
  values: T;
  register: (name: keyof T) => RegisterReturnInput;
  registerCheckbox: (name: keyof T) => RegisterReturnCheckbox;
  handleSubmit: (callback: (values: T) => void) => (e: FormEvent<HTMLFormElement>) => void;
  reset: () => void;
  setValue: (name: keyof T, value: any) => void;
}

export function useForm<T extends Record<string, any>>(initialValues: T): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setValues(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setValues(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const register = (name: keyof T): RegisterReturnInput => {
    return {
      name: name as string,
      value: String(values[name] ?? ''),
      onChange: handleChange
    };
  };

  const registerCheckbox = (name: keyof T): RegisterReturnCheckbox => {
    return {
      name: name as string,
      checked: Boolean(values[name]),
      onChange: handleChange as (e: ChangeEvent<HTMLInputElement>) => void
    };
  };

  const handleSubmit = (callback: (values: T) => void) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback(values);
  };

  const reset = () => {
    setValues(initialValues);
  };

  const setValue = (name: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    values,
    register,
    registerCheckbox,
    handleSubmit,
    reset,
    setValue
  };
}
