import { useId } from "react";

export function TextField({ label }: { label: string }) {
  const id = useId();

  return (
    <>
      <input type="text" id={id} />
      <label htmlFor={id}>{label}</label>;
    </>
  );
}
