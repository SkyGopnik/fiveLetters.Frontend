import axios from "axios";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useGameStore, useWordsStore } from "store";

import { Button } from "components/Button";
import { Placeholder } from "components/Placeholder";

import { Info } from "./_components";

import Icon from "./_assets/icon.svg";

import style from "./index.module.scss";

export const GameFailedPage = () => {
  const { setGame } = useGameStore();
  const { setWords } = useWordsStore();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const startGame = async () => {
    try {
      const { data } = await axios.post("/game/new");

      setWords([]);
      setGame(data.game);

      navigate("/rules");
    } catch (e) {
      console.error(e);
    }
  };

  const word = useMemo(
    () => searchParams.get("word") ?? "",
    [searchParams]
  );

  return (
    <>
      <Info word={word} />
      <Placeholder
        className={style.placeholder}
        word={word}
        title="Слово не отгадано"
        description="В другой раз тут будет зеленый экран"
        icon={Icon}
      />
      <div className={style.actions}>
        <Button onClick={startGame}>
          Новая игра
        </Button>
        <Button color="red" onClick={() => navigate("/rating")}>
          Рейтинг
        </Button>
      </div>
    </>
  );
};
