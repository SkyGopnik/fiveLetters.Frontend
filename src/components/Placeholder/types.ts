import { FunctionComponent } from "react";
import { DivProps, SVGProps } from "react-html-props";

export type PlaceholderType = "success" | "retry" | "failed" | "super-failed";

export type PlaceholderProps = {
  type?: PlaceholderType,
  word?: string,
  title: string,
  description: string,
  icon: FunctionComponent<SVGProps>
} & DivProps;
