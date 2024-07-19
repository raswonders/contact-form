import { useId } from "react";

export function Checkbox({ label }: { label: string }) {
  const id = useId();

  return (
    <div>
      <input type="checkbox" id={id} />
      <label className="" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
