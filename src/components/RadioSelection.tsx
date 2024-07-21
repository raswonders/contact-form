import { toCamelCase } from "../utils";

interface RadioSelectionProps {
  title: string;
  options: string[];
}

export function RadioSelection({ title, options }: RadioSelectionProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {options.map((option, i) => {
        return (
          <div key={option}>
            <input
              {...(i === 0 ? { defaultChecked: true } : {})}
              name={toCamelCase(title)}
              type="radio"
              value={option}
              id={`option${i}`}
            />
            <label htmlFor={`option${i}`}>{option}</label>
          </div>
        );
      })}
    </fieldset>
  );
}
