import { ButtonProps as ButtonHTMLProps } from "react-html-props";

export type ButtonColor = "white" | "gray" | "violet" | "amber" | "red" | "blue" | "green" | "black" | "cyan";

export type ButtonProps = {
  color?: ButtonColor
} & ButtonHTMLProps;
