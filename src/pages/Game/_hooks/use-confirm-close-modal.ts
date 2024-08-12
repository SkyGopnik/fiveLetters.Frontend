import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "store";

export const useConfirmCloseModal = () => {
  const { game } = useGameStore();

  const navigate = useNavigate();

  const [
    isConfirmCloseModalOpened,
    setConfirmCloseModalOpened
  ] = useState(false);

  const handleConfirmCloseModalClose = () => setConfirmCloseModalOpened(false);

  const handleConfirmModalEndGame = async () => {
    try {
      const { data } = await axios.delete("/game/close/" + game?.id);

      navigate("/game/failed?word=" + data);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    isConfirmCloseModalOpened,
    setConfirmCloseModalOpened,
    handleConfirmCloseModalClose,
    handleConfirmModalEndGame
  };
};
