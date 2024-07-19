export function Button({
  value,
  type = "button",
}: {
  value: string;
  type?: string;
}) {
  return <input type={type} value={value} />;
}
