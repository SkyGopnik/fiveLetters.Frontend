import { ButtonProps as ButtonPropsCore } from "components/Button";

export type ButtonType = "play" | "icon";

export interface ButtonProps extends ButtonPropsCore {
  type?: ButtonType
}
