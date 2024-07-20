export function toFieldName(str: string) {
  return str.split(/\s/).map((word, i) => (i === 0 ? word.toLowerCase() : word)).join("");
}
