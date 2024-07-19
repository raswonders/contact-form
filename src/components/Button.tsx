export function Button({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) {
  return <input type="button" value={value} onClick={onClick} />;
}
