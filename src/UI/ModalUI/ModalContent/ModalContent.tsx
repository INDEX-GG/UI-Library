import React from "react";
import CloseIcon from "UI/ModalUI/assets/icon/CloseIcon";
import { ModalContentProps, ModalStyleObj } from "UI/ModalUI/types";
import ModalHeader from "UI/ModalUI/ModalHeader/ModalHeader";

const ModalContent = ({
  type,
  children,
  handleClose,
  isVisibleClose,
  styleComponents,
}: ModalContentProps) => {
  const {
    ContainerSC = DefaultContainerSC,
    WrapperSC = DefaultWrapperSC,
    InnerWrapperSC = DefaultInnerWrapperSC,
    BackdoorSC = DefaultBackdoorSC,
    CloseButtonSC = DefaultCloseButtonSC,
    HeaderFullscreenModalSC = DefaultHeaderFullscreenModalSC,
  } = styleComponents;

  const isMountedCloseButton = isVisibleClose && type !== "fullscreen";
  const isVisibleHeader = type === "fullscreen";

  return (
    <ContainerSC>
      <WrapperSC type={type}>
        {isVisibleHeader && (
          <ModalHeader
            handleClose={handleClose}
            HeaderFullscreenModalSC={HeaderFullscreenModalSC}
          />
        )}
        <InnerWrapperSC>
          {isMountedCloseButton && (
            <CloseButtonSC type="button" onClick={handleClose}>
              <CloseIcon />
            </CloseButtonSC>
          )}
          {children}
        </InnerWrapperSC>
      </WrapperSC>
      <BackdoorSC onClick={handleClose} />
    </ContainerSC>
  );
};

const {
  CloseButtonSC: DefaultCloseButtonSC,
  ContainerSC: DefaultContainerSC,
  WrapperSC: DefaultWrapperSC,
  InnerWrapperSC: DefaultInnerWrapperSC,
  BackdoorSC: DefaultBackdoorSC,
  HeaderFullscreenModalSC: DefaultHeaderFullscreenModalSC,
} = ModalStyleObj;

export default React.memo(ModalContent);
