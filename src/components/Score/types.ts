import { DivProps } from "react-html-props";

export type ScoreType = "game" | "info";

export type ScoreProps = {
  type?: ScoreType,
  value: number
} & DivProps;
