import { WordStoreLetterState } from "store";

export const KEYBOARD_INDEXES = [
  [0, 12],
  [12, 23],
  [23]
];

export const KEYBOARD_LETTERS = [
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю"
];

export const STATE_ORDER: Record<WordStoreLetterState, number> = {
  INCORRECT: 1,
  EXIST: 2,
  CORRECT: 3,
  PLACEHOLDER: 4,
  DEFAULT: 5
};
