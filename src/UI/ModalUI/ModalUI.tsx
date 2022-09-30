import React from "react";
import {
  DefaultModalIsAnimationEffect,
  DefaultModalPortalObj,
  DefaultModalStyleComponents,
  DefaultModalType,
  DefaultModalTypeCloseButton,
  IModalProps,
} from "UI/ModalUI/types";
import { useModalUI } from "UI/ModalUI/useModalUI";
import ModalContent from "UI/ModalUI/ModalContent/ModalContent";
import { createPortal } from "react-dom";

export const ModalUI = ({
  isOpen,
  handleClose,
  children,
  type = DefaultModalType,
  portalObj = DefaultModalPortalObj,
  typeCloseButton = DefaultModalTypeCloseButton,
  isAnimationEffect = DefaultModalIsAnimationEffect,
  styleComponents = DefaultModalStyleComponents,
}: IModalProps) => {
  const { isPortal, portalName, modalContentProps } = useModalUI({
    type,
    isOpen,
    children,
    portalObj,
    typeCloseButton,
    isAnimationEffect,
    handleClose,
    styleComponents,
  } as Required<IModalProps>);

  return (
    <>
      {isOpen && (
        <>
          {isPortal ? (
            createPortal(
              <ModalContent {...modalContentProps}>{children}</ModalContent>,
              document.querySelector(portalName || "#root") as HTMLElement,
            )
          ) : (
            <ModalContent {...modalContentProps}>{children}</ModalContent>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(ModalUI);
