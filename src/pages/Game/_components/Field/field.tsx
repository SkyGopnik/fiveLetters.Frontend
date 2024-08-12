import classNames from "classnames";
import { useEffect, useMemo, useRef } from "react";

import { FieldProps } from "./types";

import style from "./field.module.scss";

export const Field = ({ className, words, ...props }: FieldProps) => {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = fieldRef.current;

    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }, [words]);

  const formattedWords = useMemo(() => {
    let emptyRows = 6 - words.length;

    if (emptyRows < 0) {
      emptyRows = 0;
    }

    const activeWord = words[words.length - 1];
    const restWords = words.slice(0, words.length - 1);

    activeWord.forEach((item, activeIndex) => {
      restWords.forEach((row) => {
        const { state, value } = row[activeIndex];

        if (!item.value && state === "CORRECT") {
          item.state = "PLACEHOLDER";
          item.value = value;
        }
      });
    });

    return [
      ...restWords,
      [...activeWord],
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
      ref={fieldRef}
    >
      {formattedWords.map((word, wordIndex) => (
        <div className={style.row} key={wordIndex}>
          {word.map((letter, letterIndex) => (
            <div
              className={classNames(
                style.item,
                { [style.itemEntered]: letter.value },
                { [style.itemPlaceholder]: letter.state === "PLACEHOLDER" },
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
