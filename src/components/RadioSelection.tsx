import { useState } from "react";
import { toCamelCase } from "../utils";
import { Marker } from "./Marker";
import radioChecked from "../assets/radio-checked.svg";
import radioUnchecked from "../assets/radio-unchecked.svg";

interface RadioSelectionProps {
  title: string;
  options: string[];
  required?: boolean;
}

export function RadioSelection({
  title,
  options,
  required,
}: RadioSelectionProps) {
  const [optionSelected, setOptionSelected] = useState("");
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
    <fieldset className="space-y-2 font-karla">
      <legend>
        {title}
        <Marker required={required} />
      </legend>
      <div className="space-y-4">
        {options.map((option, i) => {
          return (
            <div
              key={option}
              className={`flex gap-3 border ${isValid ? "border-gray-500" : "border-red"} hover:border-green-600 focus:border-green-600 focus:outline-none rounded-lg`}
            >
              <label className="w-full flex gap-2 text-lg  py-3 px-6">
                <img
                  src={
                    optionSelected === option ? radioChecked : radioUnchecked
                  }
                  aria-hidden
                />
                <input
                  name={toCamelCase(title)}
                  type="radio"
                  value={option}
                  id={`option${i}`}
                  className="sr-only"
                  onChange={() => setOptionSelected(option)}
                  onInvalid={handleInvalid}
                  onBlur={handleBlur}
                  required={required}
                />
                {option}
              </label>
            </div>
          );
        })}
      </div>
      <div className="text-red">{errorMessage}</div>
    </fieldset>
  );
}
