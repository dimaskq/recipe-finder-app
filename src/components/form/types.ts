export interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  description: string;
}

export interface SelectFieldProps extends FieldProps {
  options: { value: string; label: string }[];
}

export interface SubmitButtonProps {
  disabled: boolean;
  label: string;
}

export interface SearchFormProps {
  query: string;
  setQuery: (value: string) => void;
  cuisine: string;
  setCuisine: (value: string) => void;
  maxReadyTime: string;
  setMaxReadyTime: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
}
