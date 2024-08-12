import { FunctionComponent } from "react";

import { Modal } from "components";
import { Button } from "components/Button";

import { ConfirmCloseModalProps } from "./types";

import style from "./index.module.scss";

export const ConfirmCloseModal: FunctionComponent<ConfirmCloseModalProps> = (
  { isOpen, onMainPage, onEndGame, onClose }
) => (
  <Modal
    title="Не время уходить"
    description="Не заканчивай игру так быстро, ведь
     слова так ждут, когда ты их отгадаешь!"
    actions={[
      <Button
        className={style.watch}
        key="watch"
        onClick={onMainPage}
      >
        Я хочу на главный экран
      </Button>,
      <Button
        color="cyan"
        key="continue"
        onClick={onEndGame}
      >
        Завершить игру
      </Button>
    ]}
    isOpen={isOpen}
    onClose={onClose}
  />
);
