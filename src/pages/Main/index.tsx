import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore, useWordsStore, WordStoreLetter } from "store";

import { Button } from "components/Button";
import { Container } from "components/Container";

import { Stats } from "./_components/Stats";

import { useAsyncEffect } from "hooks/useAsyncEffect";

import { ApiUtil } from "utils/api";

import LogoIcon from "./_assets/logo.svg";

import style from "./index.module.scss";

export default function MainPage() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(true);
  const [stats, setStats] = useState<{
    position: number,
    record: number
  }>();

  const navigate = useNavigate();

  const { setGame } = useGameStore();
  const { setWords } = useWordsStore();

  useAsyncEffect(async () => {
    try {
      await ApiUtil.game.checkActive();
      setIsGameActive(true);
    } catch (e) {
      console.error(e);
    }

    try {
      const { data } = await axios.get("/game/stats");
      setStats(data);
    } catch (e) {
      console.error(e);
    }

    setIsGameLoading(false);
  }, []);

  const startGame = async () => {
    try {
      const { data } = await axios.post("/game/new");

      setWords(
        (data.gameSession.words as Array<{ letters: Array<WordStoreLetter> }>)
          .map((item) => item.letters)
      );
      setGame(data.game);
      console.log(data);

      navigate("/rules");
    } catch (e) {
      console.error(e);
    }
  };

  if (isGameLoading) {
    return null;
  }

  return (
    <Container className={style.main}>
      <LogoIcon className={style.logo} />
      {stats && (
        <Stats {...stats} />
      )}
      <div className={style.actions}>
        <Button onClick={startGame}>
          {isGameActive ? "Продолжить" : "Начать"} игру
        </Button>
        <Button
          color="cyan"
          onClick={() => navigate("/rating")}
        >
          Рейтинг
        </Button>
      </div>
    </Container>
  );
}
