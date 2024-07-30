interface ButtonProps {
  value: string;
  type?: string;
}

export function Button({ value, type = "button" }: ButtonProps) {
  return (
    <div className="relative font-karla text-white font-bold p-0 m-0 box-border">
      <div className="absolute inset-0 z-0 w-full border border-gray-500 rounded-lg bg-green-600 "></div>
      <input
        value={value}
        type={type}
        className="relative z-1 w-full py-4 px-8 border border-transparent flex justify-center items-center rounded-lg text-white z-10 bg-black/0 hover:bg-black/50 transition-colors duration-300 ease-out outline-offset-4 focus:outline-green-600 focus:border-green-600"
      />
    </div>
  );
}
