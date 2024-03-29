import { Background } from "components/Background";

import LogoIcon from "./_assets/logo.svg";

import style from "./index.module.scss";

export default function MainPage() {
  return (
    <Background>
      <LogoIcon className={style.logo} />
      <button className={style.button}>Начать игру</button>
    </Background>
  );
}