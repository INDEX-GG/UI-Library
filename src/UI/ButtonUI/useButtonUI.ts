import { IButtonProps } from "UI/ButtonUI/types";
import { FC, MouseEvent } from "react";

type ButtonArgument = Required<
  Pick<IButtonProps, "iconObj" | "isRippleEffect">
>;

export const useButtonUI = ({ iconObj, isRippleEffect }: ButtonArgument) => {
  //! icon
  const { Icon, position } = iconObj;
  const isIcon = !!Icon;
  const isBeforeIcon = position === "left" && isIcon;
  const isAfterIcon = (position === "right" || position === "auto") && isIcon;

  //! animation
  function createRipple(e: MouseEvent<HTMLButtonElement>) {
    if (!isRippleEffect) return;
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }

  return {
    position,
    isIcon,
    isAfterIcon,
    isBeforeIcon,
    Icon: Icon as FC,
    createRipple,
  };
};
