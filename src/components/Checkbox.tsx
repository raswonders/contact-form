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

  return (
    <label htmlFor={id} className="flex gap-2 font-karla">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        {...props}
        onChange={() => setIsChecked(!isChecked)}
        className="sr-only"
        required={required}
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
  );
}
