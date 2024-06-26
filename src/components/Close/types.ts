import { SVGProps } from "react-html-props";

export type CloseType = "cyan" | "blue" | "gray" | "green" | "orange" | "red";

export type CloseProps = {
  type?: CloseType
} & SVGProps;
