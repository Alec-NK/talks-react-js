import { InputLabelProps } from "./types";

export function InputLabel({ children, required = false }: InputLabelProps) {
  return (
    <label className="input-label">
      {children}
      {required && <span className="input-label-required">*</span>}
    </label>
  );
}
