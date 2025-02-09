import { createContext, useContext, useState } from "react";
import { InputRootProps } from "./types";

interface InputContextType {
  currentLength: number;
  setCurrentLength: (length: number) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export function useInputContext() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("Input components must be used within an Input.Root");
  }
  return context;
}

export function InputRoot({ children }: InputRootProps) {
  const [currentLength, setCurrentLength] = useState(0);

  return (
    <InputContext.Provider value={{ currentLength, setCurrentLength }}>
      <div className="input-container">{children}</div>
    </InputContext.Provider>
  );
}
