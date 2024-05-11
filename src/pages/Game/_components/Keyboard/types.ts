import { DivProps } from "react-html-props";

export type KeyboardProps = {
  onKeyClick?(key: string): void,
  onDeleteClick?(): void
} & DivProps;
