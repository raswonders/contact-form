import { useId, useState } from "react";
import { Marker } from "./Marker";

export function Message({ required }: { required?: boolean }) {
  const id = useId();
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    const input = event.currentTarget;

    if (input?.checkValidity()) {
      setIsValid(true);
      setErrorMessage("");
    }
  }

  function handleInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    const input = event.currentTarget;
    setIsValid(false);
    setErrorMessage(input.validationMessage);
  }

  return (
    <div className="font-karla space-y-2">
      <label className="font-karla" htmlFor={id}>
        Message
        <Marker required={required} />
      </label>
      <textarea
        className={`w-full border ${isValid ? "border-gray-500" : "border-red"} hover:border-green-600 focus:border-green-600 focus:outline-none py-3 px-6 rounded-lg resize-none`}
        name="message"
        id={id}
        rows={10}
        required
        onBlur={handleBlur}
        onInvalid={handleInvalid}
      ></textarea>
      <div className="text-red">{errorMessage}</div>
    </div>
  );
}
