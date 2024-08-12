import bridge, { EAdsFormats } from "@vkontakte/vk-bridge";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button } from "components/Button";
import { Placeholder } from "components/Placeholder";

import Icon from "./_assets/icon.svg";

import style from "./index.module.scss";

export const GameExtraPage = () => {
  const [loading, setLoading] = useState(false);

  const { game } = useGameStore();
  const navigate = useNavigate();

  const handleWatch = async () => {
    try {
      await bridge.send("VKWebAppShowNativeAds", {
        ad_format: EAdsFormats.REWARD
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleEndGame = async () => {
    setLoading(true);

    try {
      const { data } = await axios.delete("/game/close/" + game?.id);

      navigate("/game/failed?word=" + data);
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  return (
    <>
      <Placeholder
        className={style.placeholder}
        title="Слово не отгадано"
        description="Посмотри рекламу и получи 2 попытки"
        icon={Icon}
      />
      <div className={style.actions}>
        <Button onClick={handleWatch}>
          Смотреть рекламу
        </Button>
        <Button
          color="blue"
          disabled={loading}
          onClick={handleEndGame}
        >
          Завершить игру
        </Button>
      </div>
    </>
  );
};
