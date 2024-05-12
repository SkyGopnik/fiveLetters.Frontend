import classNames from "classnames";

import RemoveIcon from "./_assets/remove.svg";

import { KEYBOARD_INDEXES, KEYBOARD_LETTERS } from "./constants";

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
            const findedLetter = letters.find(
              (item) => item.value === letter.toLowerCase()
            );

            return (
              <button
                className={classNames(
                  style.item,
                  { [style.itemCorrect]: findedLetter?.state === "CORRECT" },
                  { [style.itemExist]: findedLetter?.state === "EXIST" },
                  { [style.itemIncorrect]: findedLetter?.state === "INCORRECT" }
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
