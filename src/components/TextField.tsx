import { useId } from "react";
import { toCamelCase } from "../utils";
import { Marker } from "./Marker";

interface TextFieldProps {
  label: string;
  required?: boolean;
}

export function TextField({ label, required }: TextFieldProps) {
  const id = useId();

  return (
    <div className="space-y-2">
      <label className="font-karla" htmlFor={id}>
        {label}
        <Marker required={required} />
      </label>
      <input
        className="w-full border border-gray-500  py-3 px-6 rounded-lg"
        name={toCamelCase(label)}
        type="text"
        id={id}
      />
    </div>
  );
}
