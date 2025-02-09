import { forwardRef } from "react";
import { InputFieldProps } from "./types";
import { useInputContext } from "./InputRoot";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ maxLength, onChange, ...props }, ref) => {
    const { setCurrentLength } = useInputContext();

    return (
      <div className="input-field-wrapper">
        <svg
          className="input-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          ref={ref}
          {...props}
          className="input-field"
          onChange={(e) => {
            setCurrentLength(e.target.value.length);
            onChange?.(e);
          }}
          maxLength={maxLength}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";
