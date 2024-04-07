import { Button } from "components/Button";

import { Stats } from "./_components/Stats";

import LogoIcon from "./_assets/logo.svg";

import style from "./index.module.scss";

export default function MainPage() {
  return (
    <div className={style.main}>
      <LogoIcon />
      <Stats score={20000} record={2} />
      <div className={style.actions}>
        <Button>Начать игру</Button>
        <Button color="cyan">Рейтинг</Button>
      </div>
    </div>
  );
}
