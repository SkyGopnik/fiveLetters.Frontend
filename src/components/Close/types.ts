import { SVGProps } from "react-html-props";

export type CloseType = "cyan" | "gray" | "green" | "orange" | "red";

export type CloseProps = {
  type?: CloseType
} & SVGProps;
