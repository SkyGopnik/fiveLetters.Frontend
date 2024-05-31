import { AProps } from "react-html-props";

export type ItemProps = {
  avatar: string,
  name: string,
  score: number,
  position: number
} & AProps;
