interface ButtonProps {
  value: string;
  type?: string;
}

export function Button({ value, type = "button" }: ButtonProps) {
  return (
    <input
      className="border border-gray-500 rounded-lg bg-green-600 text-white font-karla font-bold py-4 px-10"
      type={type}
      value={value}
    />
  );
}
