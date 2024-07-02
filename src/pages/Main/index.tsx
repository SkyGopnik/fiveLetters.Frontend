import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Info } from "components";
import { Button } from "components/Button";
import { Container } from "components/Container";

import { Stats } from "./_components/Stats";

import { useAsyncEffect } from "hooks/useAsyncEffect";
import { useStartGame } from "hooks/useStartGame";

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

  const { handleStartGame } = useStartGame();

  useAsyncEffect(async () => {
    const [stats, active] = await Promise.allSettled([
      axios.get("/game/stats"),
      ApiUtil.game.checkActive()
    ]);

    if (active.status === "fulfilled") {
      setIsGameActive(true);
    }

    if (stats.status === "fulfilled") {
      setStats(stats.value.data);
    }

    setIsGameLoading(false);
  }, []);

  return (
    <Container className={style.main}>
      <Info
        color="cyan"
        onClick={() => navigate("/rules?isClose=true")}
      />
      <LogoIcon className={style.logo} />
      {stats && (
        <Stats {...stats} />
      )}
      <div className={style.actions}>
        {!isGameLoading && (
          <Button onClick={handleStartGame}>
            {isGameActive ? "Продолжить" : "Начать"} игру
          </Button>
        )}
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
