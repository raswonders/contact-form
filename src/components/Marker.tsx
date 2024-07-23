export function Marker({ required }: { required?: boolean }) {
  return (
    <span className="px-1 text-green-600">{required ? "*" : "optional"}</span>
  );
}
