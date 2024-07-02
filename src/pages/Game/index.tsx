import axios, { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore, useWordsStore } from "store";

import { Info } from "components";
import { Button } from "components/Button";
import { Close } from "components/Close";
import { Container } from "components/Container";

import { Field, Keyboard, Score } from "./_components";
import { WordNotFoundModal } from "./_components/WordNotFoundModal";

import { useActiveWord } from "./_hooks";

import style from "./index.module.scss";

export default function GamePage() {
  const {
    activeWord,
    formattedToFieldActiveWord,
    isActiveWordEmpty,
    setActiveWord,
    clearActiveWord,
    handleKeyClick,
    handleDeleteClick
  } = useActiveWord();

  const [isNotFoundModalOpened, setIsNotFoundModalOpened] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const { game, setGame } = useGameStore();
  const { words, setWords } = useWordsStore();

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);

    return () => document.removeEventListener("keyup", handleKeyup);
  });

  const handleKeyup = async (e: KeyboardEvent) => {
    if (e.key !== "Enter" || isActiveWordEmpty) {
      return;
    }

    await checkWord();
  };

  const checkWord = async () => {
    setLoading(true);

    try {
      const currentWord = activeWord.join("");

      const { data } = await axios.post(
        "/game/guess/" + game?.id,
        currentWord
      );

      if (
        data.type === "NOT_GUESSED"
        || data.type === "EXTRA_LIFE"
      ) {
        if (data.type === "EXTRA_LIFE") {
          navigate("/game/extra");
        }

        setWords([...words, data.checkedWord.letters]);
      } else if (data.type === "GUESSED") {
        setGame({
          ...game!,
          score: data.score
        });
        setWords([]);

        const scoreDelta = data.score - game!.score;

        navigate(`/game/success?word=${currentWord}&delta=${scoreDelta}`);
      } else if (data.type === "END_GAME") {
        navigate("/game/failed?word=" + data.hiddenWord);
      }

      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response!.status === 404) {
          setIsNotFoundModalOpened(true);
        }
      }

      console.error(e);
    }

    setLoading(false);
    clearActiveWord();
  };

  const handleNotFoundWordWatch = async () => {
    try {
      const { data } = await axios.get("/game/prompt/" + game?.id);
      setActiveWord(data.split(""));
      setIsNotFoundModalOpened(false);
    } catch (e) {
      console.error(e);
    }
  };

  const activeLetters = useMemo(
    () => words.reduce(
      (acc, value) => acc.concat(value),
      []
    ),
    [words]
  );

  return (
    <Container className={style.page}>
      <Close onClick={() => navigate(-1)} />
      <Info
        color="cyan"
        onClick={() => navigate("/rules?isClose=true")}
      />
      <Score value={game?.score || 0} />
      <div className={style.field}>
        <Field words={[...words, formattedToFieldActiveWord]} />
      </div>
      <Keyboard
        className={style.keyboard}
        letters={activeLetters}
        onKeyClick={handleKeyClick}
        onDeleteClick={handleDeleteClick}
      />
      <Button
        className={style.action}
        color="black"
        disabled={isActiveWordEmpty || isLoading}
        onClick={checkWord}
      >
        Проверить слово
      </Button>
      <WordNotFoundModal
        isOpen={isNotFoundModalOpened}
        onWatch={handleNotFoundWordWatch}
        onClose={() => setIsNotFoundModalOpened(false)}
      />
    </Container>
  );
}
