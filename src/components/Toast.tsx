import { useEffect, useState } from "react";
import circleCheck from "../assets/circle-check.svg";

export function Toast({
  title,
  message,
  delay,
}: {
  title: string;
  message: string;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => {
      clearTimeout(hideTimeout);
    };
  }, [delay]);

  return (
    <div
      className={`${isVisible ? "opacity-100" : "opacity-0 -translate-y-64"} transition duration-1000 ease-in-out absolute top-10 p-8 font-karla text-white bg-green-600 bg-gradient-to-t from-black/50 to-black/50 rounded-xl space-y-2`}
    >
      <div className="flex items-center gap-2">
        <img src={circleCheck} aria-hidden />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <p>{message}</p>
    </div>
  );
}
