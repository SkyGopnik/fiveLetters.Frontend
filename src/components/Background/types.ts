import { DivProps } from "react-html-props";

export type BackgroundType = "cyan" | "green" | "blue" | "red";

export type BackgroundProps = {
  type?: BackgroundType
} & DivProps;
