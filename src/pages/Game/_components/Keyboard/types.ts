import { DivProps } from "react-html-props";
import { WordStoreLetter } from "store";

export type KeyboardProps = {
  letters: Array<WordStoreLetter>,
  onKeyClick?(key: string): void,
  onDeleteClick?(): void
} & DivProps;
