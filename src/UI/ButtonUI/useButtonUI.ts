import { IButtonProps } from "UI/ButtonUI/types";
import { FC } from "react";

type ButtonArgument = Required<Pick<IButtonProps, "iconObj">>;

export const useButtonUI = ({ iconObj }: ButtonArgument) => {
  //! icon
  const { Icon, position } = iconObj;
  const isIcon = !!Icon;
  const isBeforeIcon = position === "left" && isIcon;
  const isAfterIcon = (position === "right" || position === "auto") && isIcon;

  return {
    position,
    isIcon,
    isAfterIcon,
    isBeforeIcon,
    Icon: Icon as FC,
  };
};
