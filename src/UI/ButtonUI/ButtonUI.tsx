import React from "react";
import {
  ButtonUIStyleObj,
  DefaultButtonButtonProps,
  DefaultButtonIconObj,
  DefaultButtonIsAutoWidth,
  DefaultButtonIsRippleEffect,
  DefaultButtonStyledComponents,
  IButtonProps,
} from "UI/ButtonUI/types";
import { useButtonUI } from "UI/ButtonUI/useButtonUI";
import "./animation.css";

export const ButtonUI = ({
  children,
  isRippleEffect = DefaultButtonIsRippleEffect,
  iconObj = DefaultButtonIconObj,
  isAutoWidth = DefaultButtonIsAutoWidth,
  buttonProps = DefaultButtonButtonProps,
  styledComponents = DefaultButtonStyledComponents,
}: IButtonProps) => {
  const { isBeforeIcon, isAfterIcon, isIcon, Icon, position, createRipple } =
    useButtonUI({
      iconObj,
      isRippleEffect,
    });

  const {
    ButtonSC = DefaultButtonSC,
    IconContainerSC = DefaultIconContainerSC,
  } = styledComponents;

  return (
    <ButtonSC
      type="button"
      {...buttonProps}
      isIcon={isIcon}
      isAutoWidth={isAutoWidth}
      onMouseDown={createRipple}>
      {isBeforeIcon && (
        <IconContainerSC position={position}>
          <Icon />
        </IconContainerSC>
      )}
      {children}
      {isAfterIcon && (
        <IconContainerSC position={position}>
          <Icon />
        </IconContainerSC>
      )}
    </ButtonSC>
  );
};

const { ButtonSC: DefaultButtonSC, IconContainerSC: DefaultIconContainerSC } =
  ButtonUIStyleObj;

export default React.memo(ButtonUI);
