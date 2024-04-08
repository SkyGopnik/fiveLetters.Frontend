import classNames from "classnames";

import RemoveIcon from "./_assets/remove.svg";

import { KEYBOARD_INDEXES, KEYBOARD_LETTERS } from "./constants";

import { KeyboardProps } from "./types";

import style from "./keyboard.module.scss";

export const Keyboard = ({ className, ...props }: KeyboardProps) => {
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
          {KEYBOARD_LETTERS.slice(...indexes).map((letter) => (
            <button className={style.item} key={letter}>
              {letter}
            </button>
          ))}
          {index === KEYBOARD_INDEXES.length - 1 && (
            <div className={classNames(style.item, style.itemRemove)}>
              <RemoveIcon />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
