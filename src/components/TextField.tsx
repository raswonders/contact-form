import { useId, useState } from "react";
import { toCamelCase } from "../utils";
import { Marker } from "./Marker";

interface TextFieldProps {
  label: string;
  className?: string;
  required?: boolean;
  type?: string;
}

export function TextField({
  label,
  required,
  className,
  type,
  ...props
}: TextFieldProps) {
  const id = useId();
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const input = event.currentTarget;

    if (input?.checkValidity()) {
      setIsValid(true);
      setErrorMessage("");
    }
  }

  function handleInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    setIsValid(false);
    setErrorMessage(input.validationMessage);
  }

  return (
    <div className={`space-y-2 font-karla ${className}`}>
      <label htmlFor={id}>
        {label}
        <Marker required={required} />
      </label>
      <input
        className={`w-full border ${isValid ? "border-gray-500" : "border-red"} hover:border-green-600 active:border-green-600 focus:outline-none py-3 px-6 rounded-lg`}
        name={toCamelCase(label)}
        type={type ? type : "text"}
        id={id}
        required={required}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        {...props}
      />
      <div className="text-red">{errorMessage}</div>
    </div>
  );
}
