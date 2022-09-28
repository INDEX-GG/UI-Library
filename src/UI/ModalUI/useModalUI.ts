import { IModalProps, ModalContentProps } from "UI/ModalUI/types";
import { useEffect } from "react";

export const useModalUI = ({
  type,
  isOpen,
  portalObj,
  handleClose,
  isVisibleClose,
  styleComponents,
}: Required<IModalProps>) => {
  const { isPortal, name: portalName } = portalObj;

  //? close keydown
  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key == "Escape") {
      handleClose();
    }
  };

  //? close modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      window.addEventListener("keydown", handleKeydown);
    }
    return () => {
      document.body.style.overflowY = "scroll";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  const modalContentProps: Omit<ModalContentProps, "children"> = {
    type,
    handleClose,
    isVisibleClose,
    styleComponents,
  };

  return { isPortal, portalName, modalContentProps };
};
