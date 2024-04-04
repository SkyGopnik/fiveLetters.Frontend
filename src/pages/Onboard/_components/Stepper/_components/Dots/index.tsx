import classNames from "classnames";

import style from "./index.module.scss";

interface Props {
  count?: number,
  active?: number
}

export const Dots = ({ count = 4, active = 0 }: Props) => (
  <div className={style.dots}>
    {[...Array(count)].map((_, index) => (
      <div
        className={classNames(
          style.dot,
          index === active && style.dotActive
        )}
        key={index}
      />
    ))}
  </div>
);
