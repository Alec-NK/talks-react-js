export interface InputRootProps {
  children: React.ReactNode;
}

export interface InputLabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
}

export interface InputCounterProps {
  maxLength?: number;
  currentLength: number;
}
