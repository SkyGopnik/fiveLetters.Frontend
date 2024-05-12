import { DivProps } from "react-html-props";

export type BackgroundType = "cyan" | "blue" | "red";

export type BackgroundProps = {
  type?: BackgroundType
} & DivProps;
