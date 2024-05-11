import axios from "axios";
import { useGameStore, useWordsStore } from "store";

import { Button } from "components/Button";
import { Close } from "components/Close";
import { Container } from "components/Container";

import { Field, Keyboard, Score } from "./_components";

import { useActiveWord } from "./_hooks/useActiveWord";

import style from "./index.module.scss";

export default function GamePage() {
  const {
    activeWord,
    formattedToFieldActiveWord,
    isActiveWordEmpty,
    clearActiveWord,
    handleKeyClick,
    handleDeleteClick
  } = useActiveWord();

  const { game, setGame } = useGameStore();
  const { words, setWords } = useWordsStore();

  const handleCheckWord = async () => {
    try {
      const currentWord = activeWord.join("");

      const { data } = await axios.post(
        "/game/guess/" + game?.id,
        currentWord
      );

      if (data.type === "NOT_GUESSED") {
        setWords([...words, data.checkedWord.letters]);
      } else if (data.type === "GUESSED") {
        setGame({
          ...game!,
          score: data.score
        });
        setWords([]);
      }

      console.log(data);
    } catch (e) {
      console.error(e);
    }

    clearActiveWord();
  };

  return (
    <Container className={style.page}>
      <Close />
      <Score value={game?.score || 0} />
      <Field
        className={style.field}
        words={[...words, formattedToFieldActiveWord]}
      />
      <Keyboard
        className={style.keyboard}
        onKeyClick={handleKeyClick}
        onDeleteClick={handleDeleteClick}
      />
      <Button
        className={style.action}
        color="black"
        disabled={isActiveWordEmpty}
        onClick={handleCheckWord}
      >
        Проверить слово
      </Button>
    </Container>
  );
}
