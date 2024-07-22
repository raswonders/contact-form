import { toCamelCase } from "../utils";

interface RadioSelectionProps {
  title: string;
  options: string[];
}

export function RadioSelection({ title, options }: RadioSelectionProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="font-karla">
        {title}
        <span className="px-1 text-green-600">*</span>
      </legend>
      {options.map((option, i) => {
        return (
          <div
            key={option}
            className="flex gap-3 border border-gray-500 py-3 px-6 rounded-lg"
          >
            <input
              {...(i === 0 ? { defaultChecked: true } : {})}
              name={toCamelCase(title)}
              type="radio"
              value={option}
              id={`option${i}`}
            />
            <label className="font-karla text-lg" htmlFor={`option${i}`}>
              {option}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
