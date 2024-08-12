import { FunctionComponent } from "react";

import { Modal } from "components";
import { Button } from "components/Button";

import PlayIcon from "./_assets/play.svg";

import { WordNotFoundModalProps } from "./types";

import style from "./index.module.scss";

export const NeedHelpModal: FunctionComponent<WordNotFoundModalProps> = (
  { isOpen, onWatch, onClose }
) => (
  <Modal
    title="Нужна помощь?"
    description="Посмотри рекламу, чтобы получить
     рандомное слово или продолжи игру без помощи"
    actions={[
      <Button
        className={style.watch}
        key="watch"
        onClick={onWatch}
      >
        <PlayIcon />
        <span>Смотреть рекламу</span>
      </Button>,
      <Button
        color="cyan"
        key="continue"
        onClick={onClose}
      >
        Продолжить
      </Button>
    ]}
    isOpen={isOpen}
    onClose={onClose}
  />
);
