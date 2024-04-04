import { FunctionComponent } from "react";

import { Text } from "components/Text";

import { Button, ButtonType } from "./_components/Button";
import { Dots } from "./_components/Dots";

import style from "./stepper.module.scss";

interface Props {
  title: string,
  description: string,
  active: number,
  buttonType?: ButtonType
  nextStep(): void
}

export const Stepper: FunctionComponent<Props> = (
  { title, description, active, buttonType, nextStep }
) => (
  <div className={style.stepper}>
    <Text className={style.title} type="h2" tag="h1">
      {title}
    </Text>
    <Text className={style.description} type="b5">
      {description}
    </Text>
    <div className={style.actions}>
      <Dots active={active} />
      <Button type={buttonType} onClick={nextStep} />
    </div>
  </div>
);
