import { DivProps } from "react-html-props";

export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "b1" | "b2" | "b3" | "b4" | "b5";

export type TextProps = {
  type: TextType;
  tag?: string;
} & DivProps;
