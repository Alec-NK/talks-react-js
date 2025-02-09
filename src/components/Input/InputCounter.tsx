import { InputCounterProps } from "./types";
import { useInputContext } from "./InputRoot";

export function InputCounter({
  maxLength,
}: Omit<InputCounterProps, "currentLength">) {
  const { currentLength } = useInputContext();

  return (
    <span className="input-counter">
      {currentLength}/{maxLength}
    </span>
  );
}
