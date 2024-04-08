import { useEffect, useState } from "react";

import { Close } from "components/Close";

import { Field, FieldProps, Keyboard, Score } from "./_components";

import style from "./index.module.scss";

export default function GamePage() {
  const [words, setWords] = useState<FieldProps["words"]>([]);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);

    return () => document.removeEventListener("keyup", handleKeyup);
  });

  useEffect(() => {
    setWords(
      [...Array(6)].map(() => ({
        type: "INPUT",
        letters: [...Array(5)].map(() => ({
          type: "DEFAULT",
          value: ""
        }))
      }))
    );
  }, []);

  const handleKeyup = (e: KeyboardEvent) => {
    const activeRowIndex = words.findIndex((item) => item.type === "INPUT");

    if (activeRowIndex === -1) {
      return;
    }

    const newWords = [...words];
    const activeRow = newWords[activeRowIndex];

    const lastLetterIndex = activeRow.letters.findIndex((item) => !item.value);

    if (lastLetterIndex === -1) {
      return;
    }

    activeRow.letters[lastLetterIndex].value = e.key;

    setWords(newWords);
  };

  return (
    <div className={style.page}>
      <Close />
      <Score className={style.score} value={0} />
      <Field className={style.field} words={words} />
      <Keyboard className={style.keyboard} />
    </div>
  );
}
