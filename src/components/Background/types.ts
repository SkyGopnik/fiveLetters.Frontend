import { DivProps } from "react-html-props";

export type BackgroundType = "cyan" | "red";

export type BackgroundProps = {
  type?: BackgroundType
} & DivProps;
