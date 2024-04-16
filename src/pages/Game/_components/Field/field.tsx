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
          state: "DEFAULT",
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
                { [style.itemEntered]: letter.value },
                { [style.itemCorrect]: letter.state === "CORRECT" },
                { [style.itemExist]: letter.state === "EXIST" },
                { [style.itemIncorrect]: letter.state === "INCORRECT" }
              )}
              key={letterIndex}
            >
              {letter.value.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
