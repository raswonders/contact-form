interface ButtonProps {
  value: string;
  type?: string;
}

export function Button({ value, type = "button" }: ButtonProps) {
  return (
    <div className="relative font-karla text-white font-bold p-0 m-0 box-border">
      <input
        type="button"
        className="relative z-5 w-full border border-gray-500 rounded-lg bg-green-600 py-4 px-8"
      />
      <input
        value={value}
        type={type}
        className="absolute inset-0 w-full h-full border border-transparent flex justify-center items-center rounded-lg text-white z-10 bg-black/0 hover:bg-black/50 transition-colors duration-300 ease-out"
      />
    </div>
  );
}
