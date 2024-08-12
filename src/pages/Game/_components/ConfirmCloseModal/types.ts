import { ModalProps } from "components/Modal";

export type ConfirmCloseModalProps = {
  onMainPage?(): void,
  onEndGame?(): void
} & Pick<ModalProps, "isOpen" | "onClose">;
