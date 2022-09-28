import React from "react";
import {
  DefaultModalIsVisibleClose,
  DefaultModalPortalObj,
  DefaultModalStyleComponents,
  DefaultModalType,
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
  isVisibleClose = DefaultModalIsVisibleClose,
  styleComponents = DefaultModalStyleComponents,
}: IModalProps) => {
  const { isPortal, portalName, modalContentProps } = useModalUI({
    isOpen,
    type,
    children,
    portalObj,
    isVisibleClose,
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
