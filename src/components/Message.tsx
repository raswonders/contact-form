import { useId } from "react";

export function Message() {
  const id = useId();

  return (
    <div>
      <label className="block" htmlFor={id}>Message</label>
      <textarea name="message" id={id}></textarea>
    </div>
  );
}
