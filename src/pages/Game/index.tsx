import axios, { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore, useWordsStore } from "store";

import { Info } from "components";
import { Button } from "components/Button";
import { Close } from "components/Close";
import { Container } from "components/Container";
import { Score } from "components/Score";

import {
  NeedHelpModal,
  WordNotFoundModal,
  ConfirmCloseModal,
  Field,
  Keyboard
} from "./_components";

import {
  useActiveWord,
  useConfirmCloseModal,
  useNeedHelpModal,
  useWordNotFoundModal
} from "./_hooks";

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

  const [isLoading, setLoading] = useState(false);

  const setPrompt = async (cb?: () => void) => {
    const { data } = await axios.get("/game/prompt/" + game?.id);
    setActiveWord(data.split(""));
    cb?.();
  };

  const {
    isNeedHelpModalOpened,
    handleNeedHelpModalWatch,
    handleNeedHelpModalClose
  } = useNeedHelpModal({
    activeWord,
    onWatch: setPrompt
  });

  const {
    isWordNotFoundModalOpened,
    setWordNotFoundModalOpened,
    handleWordNotFoundModalWatch,
    handleWordNotFoundModalClose
  } = useWordNotFoundModal({
    onWatch: setPrompt
  });

  const {
    isConfirmCloseModalOpened,
    setConfirmCloseModalOpened,
    handleConfirmModalEndGame,
    handleConfirmCloseModalClose
  } = useConfirmCloseModal();

  const { game, setGame } = useGameStore();
  const { words, setWords } = useWordsStore();

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);

    return () => document.removeEventListener("keyup", handleKeyup);
  });

  const handleKeyup = async (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    if (isActiveWordEmpty || isLoading) {
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
          setWordNotFoundModalOpened(true);
        }
      }

      console.error(e);
    }

    setLoading(false);
    clearActiveWord();
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
      <Close onClick={() => setConfirmCloseModalOpened(true)} />
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
        isOpen={isWordNotFoundModalOpened}
        onWatch={handleWordNotFoundModalWatch}
        onClose={handleWordNotFoundModalClose}
      />
      <NeedHelpModal
        isOpen={isNeedHelpModalOpened}
        onWatch={handleNeedHelpModalWatch}
        onClose={handleNeedHelpModalClose}
      />
      <ConfirmCloseModal
        isOpen={isConfirmCloseModalOpened}
        onMainPage={() => navigate(-1)}
        onEndGame={handleConfirmModalEndGame}
        onClose={handleConfirmCloseModalClose}
      />
    </Container>
  );
}
