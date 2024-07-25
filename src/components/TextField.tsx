import { useId, useState } from "react";
import { toCamelCase } from "../utils";
import { Marker } from "./Marker";

interface TextFieldProps {
  label: string;
  required?: boolean;
}

export function TextField({ label, required }: TextFieldProps) {
  const id = useId();
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    let input = event.currentTarget;
    if (!input?.checkValidity()) {
      setIsValid(false);
      setErrorMessage(input.validationMessage);
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  }

  return (
    <div className="space-y-2 font-karla">
      <label htmlFor={id}>
        {label}
        <Marker required={required} />
      </label>
      <input
        className={`w-full border ${isValid ? "border-gray-500" : "border-red"} hover:border-green-600 focus:border-green-600 focus:outline-none py-3 px-6 rounded-lg`}
        name={toCamelCase(label)}
        type="text"
        id={id}
        required={required}
        onBlur={handleBlur}
      />
      <div className="text-red">{errorMessage}</div>
    </div>
  );
}
