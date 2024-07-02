import axios from "axios";
import { useNavigate } from "react-router";
import { useGameStore, useWordsStore, WordStoreLetter } from "store";

import { StorageUtil } from "utils/storage/storage";

export const useStartGame = () => {
  const { setGame } = useGameStore();
  const { setWords } = useWordsStore();

  const navigate = useNavigate();

  const startGame = async () => {
    const { data } = await axios.post("/game/new");

    setWords(
      (data.gameSession.words as Array<{ letters: Array<WordStoreLetter> }>)
        .map((item) => item.letters)
    );
    setGame(data.game);
  };

  const redirect = async () => {
    const data = Boolean(await StorageUtil.get("isRulesSkipped"));

    if (data) {
      return navigate("/game");
    }

    return navigate("/rules");
  };

  const handleStartGame = async () => {
    await startGame();
    redirect();
  };

  return { handleStartGame };
};
