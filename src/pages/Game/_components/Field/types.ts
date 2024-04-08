import { DivProps } from "react-html-props";

export type FieldLetterType =
  "DEFAULT"
  | "CORRECT"
  | "EXIST"
  | "INCORRECT";

export type FieldLetter = {
  type: FieldLetterType,
  value: string
};

export type FieldProps = {
  words: Array<{
    type: "INPUT" | "READY",
    letters: Array<FieldLetter>
  }>
} & DivProps;
