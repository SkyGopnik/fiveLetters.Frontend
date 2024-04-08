import classNames from "classnames";

import { FieldProps } from "./types";

import style from "./field.module.scss";

export const Field = ({ className, words, ...props }: FieldProps) => (
  <div
    {...props}
    className={classNames(
      style.field,
      className
    )}
  >
    {words.map((word, wordIndex) => (
      <div className={style.row} key={wordIndex}>
        {word.letters.map((letter, letterIndex) => (
          <div
            className={classNames(
              style.item,
              { [style.itemEntered]: letter.value }
            )}
            key={letterIndex}
          >
            {letter.value}
          </div>
        ))}
      </div>
    ))}
  </div>
);
