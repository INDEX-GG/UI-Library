import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useButtonUIStyles } from "UI/ButtonUI/style";

export const ButtonUIStyleObj = useButtonUIStyles();

type ButtonIconPosition = "left" | "right" | "auto";

type ButtonIsAutoWidth = boolean;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonIconObj = { Icon: FC | null; position: ButtonIconPosition };
type ButtonStyleComponents = Partial<typeof ButtonUIStyleObj>;

export interface IButtonProps {
  children: ReactNode;
  iconObj?: ButtonIconObj;
  isAutoWidth?: ButtonIsAutoWidth;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  styledComponents?: ButtonStyleComponents;
}
export const DefaultButtonIsAutoWidth: ButtonIsAutoWidth = true;
export const DefaultButtonIconObj: ButtonIconObj = {
  Icon: null,
  position: "auto",
};
export const DefaultButtonButtonProps: ButtonProps = {};
export const DefaultButtonStyledComponents: ButtonStyleComponents = {};
