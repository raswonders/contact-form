import { useId } from "react";

interface CheckboxProps {
  label: string;
  name: string;
}

export function Checkbox({ label, name }: CheckboxProps) {
  const id = useId();

  return (
    <div className="flex space-x-4">
      <input type="checkbox" name={name} id={id} />
      <label className="font-karla" htmlFor={id}>
        {label}
        <span className="px-1 text-green-600">*</span>
      </label>
    </div>
  );
}
