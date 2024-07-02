import bridge from "@vkontakte/vk-bridge";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useGameStore } from "store";

import { Info } from "components";
import { Button } from "components/Button";
import { Placeholder } from "components/Placeholder";

import { useGufoSearch } from "hooks";

import { declareNumber } from "utils/declare-number";

import Icon from "./_assets/icon.svg";

import style from "./index.module.scss";

export const GameFailedPage = () => {
  const { game } = useGameStore();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleRepost = async () => {
    const starStringFormat = declareNumber(
      Number(game?.score),
      ["звездочку", "звездочки", "звездочек"]
    );

    try {
      await bridge.send("VKWebAppShowWallPostBox", {
        message: `Мой рекорд в игре Вордли составил - ${starStringFormat},
        присоединяйся и обгони меня!`,
        attachments: "https://vk.com/app51890728"
      });
    } catch (e) {
      console.error(e);
    }
  };

  const word = useMemo(
    () => searchParams.get("word") ?? "",
    [searchParams]
  );

  const { handleSearch } = useGufoSearch(word);

  return (
    <>
      <Info onClick={handleSearch} />
      <Placeholder
        className={style.placeholder}
        word={word}
        title="Слово не отгадано"
        description="В другой раз тут будет зеленый экран"
        icon={Icon}
      />
      <div className={style.actions}>
        <Button onClick={() => navigate("/")}>
          Главный экран
        </Button>
        <Button color="red" onClick={handleRepost}>
          Поделиться
        </Button>
      </div>
    </>
  );
};
