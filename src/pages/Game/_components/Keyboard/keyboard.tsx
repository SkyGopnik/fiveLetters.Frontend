import classNames from "classnames";
import { useMemo } from "react";

import RemoveIcon from "./_assets/remove.svg";

import { KEYBOARD_INDEXES, KEYBOARD_LETTERS, STATE_ORDER } from "./constants";

import { KeyboardProps } from "./types";

import style from "./keyboard.module.scss";

export const Keyboard = (
  {
    className,
    letters,
    onKeyClick,
    onDeleteClick,
    ...props
  }: KeyboardProps
) => {
  const sortedLettersByPriority = useMemo(
    () => letters.sort((a, b) => STATE_ORDER[a.state] - STATE_ORDER[b.state]),
    [letters]
  );

  return (
    <div
      {...props}
      className={classNames(
        style.keyboard,
        className
      )}
    >
      {KEYBOARD_INDEXES.map((indexes, index) => (
        <div className={style.row} key={index}>
          {KEYBOARD_LETTERS.slice(...indexes).map((letter) => {
            const findedLetter = sortedLettersByPriority.findLast(
              (item) => item.value === letter.toLowerCase()
            );

            return (
              <button
                className={classNames(
                  style.item,
                  {
                    [style.itemIncorrect]: findedLetter?.state === "INCORRECT",
                    [style.itemExist]: findedLetter?.state === "EXIST",
                    [style.itemCorrect]: findedLetter?.state === "CORRECT"
                  }
                )}
                key={letter}
                onClick={() => onKeyClick?.(letter.toLowerCase())}
              >
                {letter}
              </button>
            );
          })}
          {index === KEYBOARD_INDEXES.length - 1 && (
            <button
              className={classNames(
                style.item,
                style.itemRemove
              )}
              onClick={onDeleteClick}
            >
              <RemoveIcon />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
