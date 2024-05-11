import { useEffect, useMemo, useState } from "react";
import { WordStoreLetter } from "store";

import { KeyboardUtil } from "./_utils/keyboard";

export const useActiveWord = () => {
  const emptyWord = Array(5).fill("");

  const [activeWord, setActiveWord] = useState<Array<string>>(emptyWord);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);

    return () => document.removeEventListener("keyup", handleKeyup);
  });

  const enterActiveWord = (key: string) => {
    const newActiveWord = [...activeWord];
    const lastLetterIndex = newActiveWord.findIndex((letter) => !letter);

    if (["Backspace", "Delete"].includes(key)) {
      let newLetterIndex = lastLetterIndex - 1;

      if (lastLetterIndex === -1) {
        newLetterIndex = newActiveWord.length - 1;
      }

      if (newLetterIndex < 0) {
        return;
      }

      newActiveWord[newLetterIndex] = "";
    } else {
      if (lastLetterIndex === -1) {
        return;
      }

      newActiveWord[lastLetterIndex] = KeyboardUtil.validateInput(key);
    }

    setActiveWord(newActiveWord);
  };

  const handleKeyup = (e: KeyboardEvent) => enterActiveWord(e.key);

  const handleKeyClick = (key: string) => enterActiveWord(key);
  const handleDeleteClick = () => enterActiveWord("Delete");

  const clearActiveWord = () => setActiveWord(emptyWord);

  const isActiveWordEmpty = useMemo(() => (
    activeWord.findIndex((letter) => !letter) !== -1
  ), [activeWord]);

  const formattedToFieldActiveWord: Array<WordStoreLetter> = useMemo(() => (
    activeWord.map((letter) => ({
      state: "DEFAULT",
      value: letter
    }))
  ), [activeWord]);

  return {
    activeWord,
    handleKeyClick,
    handleDeleteClick,
    clearActiveWord,
    isActiveWordEmpty,
    formattedToFieldActiveWord
  };
};
