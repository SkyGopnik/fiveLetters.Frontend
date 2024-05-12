import { FunctionComponent } from "react";
import { SVGProps } from "react-html-props";

import BlueIcon from "./_assets/close-blue.svg";
import CyanIcon from "./_assets/close-cyan.svg";
import GrayIcon from "./_assets/close-gray.svg";
import GreenIcon from "./_assets/close-green.svg";
import OrangeIcon from "./_assets/close-orange.svg";
import RedIcon from "./_assets/close-red.svg";

import { CloseType } from "./types";

export const ICONS: Record<CloseType, FunctionComponent<SVGProps>> = {
  cyan: CyanIcon,
  blue: BlueIcon,
  gray: GrayIcon,
  green: GreenIcon,
  orange: OrangeIcon,
  red: RedIcon
};
