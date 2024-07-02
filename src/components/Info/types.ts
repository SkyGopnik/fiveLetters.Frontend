import { DivProps } from "react-html-props";

export type InfoColor = "cyan" | "red";

export type InfoProps = {
  color?: InfoColor
} & DivProps;
