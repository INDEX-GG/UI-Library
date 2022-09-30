import React from "react";
import CloseIcon from "UI/ModalUI/assets/icon/CloseIcon";
import { ModalContentProps, ModalStyleObj } from "UI/ModalUI/types";
import ModalHeader from "UI/ModalUI/ModalHeader/ModalHeader";
import { useModalContent } from "UI/ModalUI/ModalContent/useModalContent";

const ModalContent = (props: ModalContentProps) => {
  //? props
  const { type, children, handleClose, isAnimationEffect, styleComponents } =
    props;
  //? style
  const {
    ContainerSC = DefaultContainerSC,
    WrapperSC = DefaultWrapperSC,
    BackdoorSC = DefaultBackdoorSC,
    InnerWrapperSC = DefaultInnerWrapperSC,
    HeaderFullscreenModalSC = DefaultHeaderFullscreenModalSC,
    ChildrenContainerSC = DefaultChildrenContainerSC,
    CloseButtonSC = DefaultCloseButtonSC,
    CloseButtonNameSC = DefaultCloseButtonNameSC,
  } = styleComponents;

  //? main-logic
  const { isVisibleHeader, isMountedButtonIcon, isMountedButtonName } =
    useModalContent(props);

  return (
    <ContainerSC>
      <WrapperSC type={type} isAnimationEffect={isAnimationEffect}>
        {isVisibleHeader && (
          <ModalHeader
            handleClose={handleClose}
            HeaderFullscreenModalSC={HeaderFullscreenModalSC}
          />
        )}
        <InnerWrapperSC>
          {isMountedButtonIcon && (
            <CloseButtonSC type="button" onClick={handleClose}>
              <CloseIcon />
            </CloseButtonSC>
          )}
          <ChildrenContainerSC>{children}</ChildrenContainerSC>
          {isMountedButtonName && (
            <CloseButtonNameSC onClick={handleClose}>Хорошо</CloseButtonNameSC>
          )}
        </InnerWrapperSC>
      </WrapperSC>
      <BackdoorSC onClick={handleClose} />
    </ContainerSC>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  WrapperSC: DefaultWrapperSC,
  BackdoorSC: DefaultBackdoorSC,
  InnerWrapperSC: DefaultInnerWrapperSC,
  HeaderFullscreenModalSC: DefaultHeaderFullscreenModalSC,
  CloseButtonSC: DefaultCloseButtonSC,
  CloseButtonNameSC: DefaultCloseButtonNameSC,
  ChildrenContainerSC: DefaultChildrenContainerSC,
} = ModalStyleObj;

export default React.memo(ModalContent);
