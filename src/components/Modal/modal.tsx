import classNames from "classnames";
import { FunctionComponent } from "react";

import { Container } from "components/Container";
import { Text } from "components/Text";

import { ModalProps } from "./types";

import style from "./modal.module.scss";

export const Modal: FunctionComponent<ModalProps> = ({
  title, description, actions, isOpen, onClose
}) => (
  <Container
    className={classNames(
      style.wrapper,
      { [style.wrapperOpened]: isOpen }
    )}
  >
    <div className={style.backdrop} onClick={onClose} />
    <div className={style.modal}>
      <Text type="h2">{title}</Text>
      <Text className={style.description} type="b4">{description}</Text>
      {actions && (
        <div className={style.actions}>
          {actions.map((action) => action)}
        </div>
      )}
    </div>
  </Container>
);
