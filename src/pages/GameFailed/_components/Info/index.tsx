import { FunctionComponent } from "react";

import InfoIcon from "./_assets/info.svg";

import { GUFO_SEARCH_URL } from "./constants";

import { InfoProps } from "./types";

import style from "./index.module.scss";

export const Info: FunctionComponent<InfoProps> = ({ word }) => (
  <a
    className={style.info}
    rel="noreferrer"
    target="_blank"
    href={GUFO_SEARCH_URL + word}
  >
    <InfoIcon />
  </a>
);
