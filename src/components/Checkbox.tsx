import { InputHTMLAttributes, useId, useState } from "react";
import checkmarkChecked from "../assets/checkmark-checked.svg";
import checkmarkUnchecked from "../assets/checkmark-unchecked.svg";
import { Marker } from "./Marker";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, required, ...props }: CheckboxProps) {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);
  // const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const input = event.currentTarget;

    if (input?.checkValidity()) {
      // setIsValid(true);
      setErrorMessage("");
    }
  }

  function handleInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    // setIsValid(false);
    setErrorMessage(input.validationMessage);
  }

  return (
    <div className="font-karla space-y-2">
      <label htmlFor={id} className="flex gap-2 font-karla">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          {...props}
          onChange={() => setIsChecked(!isChecked)}
          className="sr-only"
          required={required}
          onBlur={handleBlur}
          onInvalid={handleInvalid}
        />
        <img
          src={isChecked ? checkmarkChecked : checkmarkUnchecked}
          aria-hidden
        />
        <span>
          {label}
          <Marker required={required} />
        </span>
      </label>
      <div className="text-red">{errorMessage}</div>
    </div>
  );
}
