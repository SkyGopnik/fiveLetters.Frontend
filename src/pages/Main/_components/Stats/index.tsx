import { FunctionComponent } from "react";

import { Text } from "components/Text";

import StarIcon from "./_assets/star.svg";

import style from "./index.module.scss";

interface Props {
  score: number,
  record: number
}

export const Stats: FunctionComponent<Props> = ({ score, record }) => (
  <div className={style.stats}>
    <div className={style.item}>
      <Text type="h2" tag="h2">Твой счет</Text>
      <Text className={style.description} type="b1">
        <span>{score}</span>
        <StarIcon />
      </Text>
    </div>
    <div className={style.item}>
      <Text type="h2" tag="h2">Твой рекорд</Text>
      <Text className={style.description} type="b1">
        <span>{record}</span>
        <StarIcon />
      </Text>
    </div>
  </div>
);
