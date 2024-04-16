import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGameStore, useWordsStore, WordStoreLetter } from "store";

import { KeyboardUtil } from "pages/Game/_utils/keyboard/keyboard";

import { Button } from "components/Button";
import { Close } from "components/Close";

import { Field, Keyboard, Score } from "./_components";

import style from "./index.module.scss";

export default function GamePage() {
  const [activeWord, setActiveWord] = useState<Array<string>>(
    Array(5).fill("")
  );

  const { game, setGame } = useGameStore();
  const { words, setWords } = useWordsStore();

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);

    return () => document.removeEventListener("keyup", handleKeyup);
  });

  const handleKeyup = (e: KeyboardEvent) => {
    const newActiveWord = [...activeWord];
    const lastLetterIndex = newActiveWord.findIndex((letter) => !letter);

    if (["Backspace", "Delete"].includes(e.key)) {
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

      newActiveWord[lastLetterIndex] = KeyboardUtil.validateInput(e);
    }

    setActiveWord(newActiveWord);
  };

  const handleCheckWord = async () => {
    try {
      const currentWord = activeWord.join("");

      const { data } = await axios.post(
        "/game/guess/" + game?.id,
        currentWord
      );

      if (data.type === "NOT_GUESSED") {
        setWords([...words, data.checkedWord.letters]);

        setActiveWord(
          Array(5).fill("")
        );
      } else if (data.type === "GUESSED") {
        setGame({
          ...game!,
          score: data.score
        });
        setWords([]);
        setActiveWord(Array(5).fill(""));
      }

      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const actionDisabled = useMemo(() => (
    activeWord.findIndex((letter) => !letter) !== -1
  ), [activeWord]);

  const formattedActiveWord: Array<WordStoreLetter> = useMemo(() => (
    activeWord.map((letter) => ({
      state: "DEFAULT",
      value: letter
    }))
  ), [activeWord]);

  return (
    <div className={style.page}>
      <Close />
      <Score className={style.score} value={game?.score || 0} />
      <Field className={style.field} words={[...words, formattedActiveWord]} />
      <Keyboard className={style.keyboard} />
      <Button
        className={style.action}
        color="black"
        disabled={actionDisabled}
        onClick={handleCheckWord}
      >
        Проверить слово
      </Button>
    </div>
  );
}
