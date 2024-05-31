import classNames from "classnames";
import { FunctionComponent } from "react";

import { Button } from "components/Button";
import { Container } from "components/Container";
import { Text } from "components/Text";

import PlayIcon from "./_assets/play.svg";

import { WordNotFoundModalProps } from "./types";

import style from "./index.module.scss";

export const WordNotFoundModal: FunctionComponent<WordNotFoundModalProps> = (
  { isOpen, onWatch, onClose }
) => (
  <Container
    className={classNames(
      style.wrapper,
      { [style.wrapperOpened]: isOpen }
    )}
  >
    <div className={style.backdrop} onClick={onClose} />
    <div className={style.modal}>
      <Text type="h2">Слово не найдено в базе</Text>
      <Text className={style.description} type="b4">
        Посмотри рекламу, чтобы получить рандомное
         слово или продолжи игру без помощи
      </Text>
      <div className={style.actions}>
        <Button className={style.watch} onClick={onWatch}>
          <PlayIcon />
          <span>Смотреть рекламу</span>
        </Button>
        <Button color="cyan" onClick={onClose}>Продолжить</Button>
      </div>
    </div>
  </Container>
);
