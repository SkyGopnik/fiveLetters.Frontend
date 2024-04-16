import { DivProps } from "react-html-props";
import { WordStoreLetter } from "store";

export type FieldProps = {
  words: Array<Array<WordStoreLetter>>
} & DivProps;
