import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

import { Button } from "components/Button";
import { Close } from "components/Close";
import { Container } from "components/Container";
import { Text } from "components/Text";

import { Rules } from "./_components/Rules";

import { useAsyncEffect } from "hooks/useAsyncEffect";

import { StorageUtil } from "utils/storage/storage";

import style from "./index.module.scss";

export default function RulesPage() {
  const [isRulesSkipped, setIsRulesSkipped] = useState(false);
  const [isStorageFetched, setIsStorageFetched] = useState(false);

  const navigate = useNavigate();

  useAsyncEffect(async () => {
    const data = Boolean(await StorageUtil.get("isRulesSkipped"));

    if (data) {
      setIsRulesSkipped(true);
    }

    setIsStorageFetched(true);
  }, []);

  const startGame = () => {
    navigate("/game");
  };

  const skipRules = async () => {
    await StorageUtil.set("isRulesSkipped", "true");

    startGame();
  };

  if (!isStorageFetched) {
    return null;
  }

  return (
    <Container className={style.page}>
      <Close onClick={startGame} />
      <Text className={style.title} type="h1" tag="h1">
        Правила игры
      </Text>
      <Rules className={style.rules} />
      <div className={style.actions}>
        <Button onClick={startGame}>Начать игру</Button>
        <Button
          color="cyan"
          onClick={skipRules}
        >
          Больше не показывать
        </Button>
      </div>
      {isRulesSkipped && (
        <Navigate to="/game" replace={true} />
      )}
    </Container>
  );
}
