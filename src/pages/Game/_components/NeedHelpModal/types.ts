import { ModalProps } from "components/Modal";

export type WordNotFoundModalProps = {
  onWatch?(): void
} & Pick<ModalProps, "isOpen" | "onClose">;
