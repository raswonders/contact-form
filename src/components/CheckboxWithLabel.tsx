import { useId } from "react";
import { Marker } from "./Marker";

interface CheckboxWithLabelProps {
  label: string;
  name: string;
  required?: boolean;
}

export function CheckboxWithLabel({
  label,
  name,
  required,
}: CheckboxWithLabelProps) {
  const id = useId();

  return (
    <div className="flex space-x-4">
      <input type="checkbox" name={name} id={id} />
      <label className="font-karla" htmlFor={id}>
        {label}
        <Marker required={required} />
      </label>
    </div>
  );
}
