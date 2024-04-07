import { Background } from "components/Background";
import { Button } from "components/Button";

import LogoIcon from "./_assets/logo.svg";

import style from "./index.module.scss";

export default function StartPage() {
  return (
    <Background>
      <LogoIcon className={style.logo} />
      <Button className={style.button}>Начать игру</Button>
    </Background>
  );
}
