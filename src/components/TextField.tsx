import { useId } from "react";
import { toCamelCase } from "../utils";

interface TextFieldProps {
  label: string;
}

export function TextField({ label }: TextFieldProps) {
  const id = useId();

  return (
    <div className="space-y-2">
      <label className="font-karla" htmlFor={id}>
        {label}
        <span className="px-1 text-green-600">*</span>
      </label>
      <input
        className="w-full border border-gray-500 py-3 px-6 rounded-lg"
        name={toCamelCase(label)}
        type="text"
        id={id}
      />
    </div>
  );
}
