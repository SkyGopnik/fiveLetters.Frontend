import { ReactNode } from "react";

import BackgroundImage from "./_assets/pattern.svg";

import style from "./index.module.scss";

interface Props {
  children: ReactNode
}

export function Background({ children }: Props) {
  return (
    <div className={style.background}>
      <BackgroundImage className={style.pattern} />
      <div className={style.shadow} />
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}
