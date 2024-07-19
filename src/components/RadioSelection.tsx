import { useId } from "react";

export function RadioSelection({
  legend,
  labels,
}: {
  legend: string;
  labels: string[];
}) {
  const id = useId();

  return (
    <fieldset>
      <legend>{legend}</legend>
      {labels.map((label, index) => {
        return (
          <div key={label}>
            <input type="radio" id={id + "-option" + index} />
            <label htmlFor={id + "-option" + index}>{label}</label>
          </div>
        );
      })}
    </fieldset>
  );
}
