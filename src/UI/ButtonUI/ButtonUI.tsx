import React from "react";
import {
  ButtonUIStyleObj,
  DefaultButtonButtonProps,
  DefaultButtonIconObj,
  DefaultButtonIsAutoWidth,
  DefaultButtonStyledComponents,
  IButtonProps,
} from "UI/ButtonUI/types";
import { useButtonUI } from "UI/ButtonUI/useButtonUI";
import "./animation.css";

export const ButtonUI = ({
  children,
  iconObj = DefaultButtonIconObj,
  isAutoWidth = DefaultButtonIsAutoWidth,
  buttonProps = DefaultButtonButtonProps,
  styledComponents = DefaultButtonStyledComponents,
}: IButtonProps) => {
  const { isBeforeIcon, isAfterIcon, isIcon, Icon, position } = useButtonUI({
    iconObj,
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
      isAutoWidth={isAutoWidth}>
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
