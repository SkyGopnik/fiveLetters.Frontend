import classNames from "classnames";
import { FunctionComponent } from "react";
import { DivProps } from "react-html-props";

import { Text } from "components/Text";

import StarIcon from "assets/star.svg";

import style from "./index.module.scss";

interface Props extends DivProps{
  value: number
}

export const Score: FunctionComponent<Props> = ({ value, ...props }) => (
  <div
    {...props}
    className={classNames(
      style.score,
      props.className
    )}
  >
    <Text type="h4">Общий счет</Text>
    <Text className={style.description} type="b2">
      <span>{value}</span>
      <StarIcon className={style.icon} />
    </Text>
  </div>
);
