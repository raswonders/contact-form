import circleCheck from "../assets/circle-check.svg";

export function Toast({ title, message }: { title: string; message: string }) {
  return (
    <div className="absolute top-10 p-8 font-karla text-white bg-green-600 bg-gradient-to-t from-black/50 to-black/50 rounded-xl space-y-2">
      <div className="flex items-center gap-2">
        <img src={circleCheck} aria-hidden />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <p>{message}</p>
    </div>
  );
}
