export type WordStoreLetterState =
  "DEFAULT"
  | "CORRECT"
  | "EXIST"
  | "INCORRECT";

export type WordStoreLetter = {
  state: WordStoreLetterState,
  value: string
};

export type WordsStore = {
  words: Array<Array<WordStoreLetter>>,
  setWords(words: WordsStore["words"]): void
};
