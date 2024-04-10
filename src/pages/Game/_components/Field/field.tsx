import classNames from "classnames";
import { useMemo } from "react";

import { FieldProps } from "./types";

import style from "./field.module.scss";

export const Field = ({ className, words, ...props }: FieldProps) => {
  const formattedWords = useMemo(() => {
    const emptyRows = 6 - words.length;

    return [
      ...words,
      ...[...Array(emptyRows)].map(() => (
        [...Array(5)].map(() => ({
          type: "DEFAULT",
          value: ""
        }))
      ))
    ];
  }, [words]);

  return (
    <div
      {...props}
      className={classNames(
        style.field,
        className
      )}
    >
      {formattedWords.map((word, wordIndex) => (
        <div className={style.row} key={wordIndex}>
          {word.map((letter, letterIndex) => (
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
};
