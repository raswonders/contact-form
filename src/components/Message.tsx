import { useId } from "react";
import { Marker } from "./Marker";

export function Message({ required }: { required?: boolean }) {
  const id = useId();

  return (
    <div className="space-y-2">
      <label className="font-karla" htmlFor={id}>
        Message
        <Marker required={required} />
      </label>
      <textarea
        className="w-full border border-gray-500 py-3 px-6 rounded-lg resize-none"
        name="message"
        id={id}
        rows={10}
        required
      ></textarea>
    </div>
  );
}
