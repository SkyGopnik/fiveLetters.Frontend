import { ReactNode } from "react";

export type ModalProps = {
  title: string,
  description: string,
  actions?: Array<ReactNode>,
  isOpen?: boolean,
  onClose?(): void
};
