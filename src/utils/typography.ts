export function nobrRu(text: string, ignore?: string): string {
  if (!text) return text;

  const defaults = ["и", "я", "мои", "вы","в","к","с","у","о","а","по","на","за","из","от","до","для","об","со","не","ни","но", "или", "над", "мы"];
  const words = ignore ? defaults.filter(w => w !== ignore.toLowerCase()) : defaults;
  const alt = words.join("|");

  // граница слева (начало/пробел/nbsp/скобки/тире/кавычки) + слово из списка + обычные пробелы
  const re = new RegExp(`(^|[\\s\\u00A0(«—-])((?:${alt}))\\s+(?=\\S)`, "giu");

  // прогоняем, пока находятся новые вхождения (после предыдущих замен)
  let prev: string;
  let out = text;
  do {
    prev = out;
    out = out.replace(re, (_m, left, w) => `${left}${w}\u00A0`);
  } while (out !== prev);

  return out;
}
