import { useId } from "react";

export function TextField({ label }: { label: string }) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-karla" htmlFor={id}>
        {label}
        <span className="px-1 text-green-600">*</span>
      </label>
      <input className="border border-gray-500 py-3 px-8 rounded-lg" type="text" id={id} />
    </div>
  );
}
