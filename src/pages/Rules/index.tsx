import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import { Button } from "components/Button";
import { Close } from "components/Close";
import { Container } from "components/Container";
import { Text } from "components/Text";

import { Rules } from "./_components/Rules";

import { StorageUtil } from "utils/storage/storage";

import style from "./index.module.scss";

export default function RulesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const skipRules = async () => {
    await StorageUtil.set("isRulesSkipped", "true");

    handleStartGame();
  };

  const isClose = useMemo(
    () => Boolean(searchParams.get("isClose")),
    [searchParams]
  );

  return (
    <Container className={style.page}>
      <Close onClick={isClose ? handleBack : handleStartGame} />
      <div className={style.content}>
        <Text className={style.title} type="h1" tag="h1">
          Правила игры
        </Text>
        <Rules
          className={style.rules}
          rules={[
            "правильная позиция\nбуквы в слове",
            "неправильная позиция\nбуквы в слове",
            "отсутствие\nбуквы в слове"
          ]}
        />
      </div>
      <div className={style.actions}>
        {isClose ? (
          <Button color="cyan" onClick={handleBack}>
            Закрыть
          </Button>
        ) : (
          <>
            <Button onClick={handleStartGame}>
              Начать игру
            </Button>
            <Button
              color="cyan"
              onClick={skipRules}
            >
              Больше не показывать
            </Button>
          </>
        )}
      </div>
    </Container>
  );
}
