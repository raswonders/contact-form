import { useId } from "react";

export function Message() {
  const id = useId();

  return (
    <div className="space-y-2">
      <label className="font-karla" htmlFor={id}>
        Message
        <span className="px-1 text-green-600">*</span>
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
