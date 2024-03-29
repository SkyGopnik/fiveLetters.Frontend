import classNames from "classnames";

import { useAsyncEffect } from "hooks/useAsyncEffect";

import style from "./index.module.scss";

export default function MainPage() {
  useAsyncEffect(async () => {},  []);

  return (
    <div className={classNames(style.test)}>123</div>
  );
}