import { ModalContentProps } from "UI/ModalUI/types";

export const useModalContent = (props: ModalContentProps) => {
  const { type, typeCloseButton } = props;

  const isVisibleHeader = type === "fullscreen";

  const isMountedButton = !!typeCloseButton && type !== "fullscreen";

  const isMountedButtonIcon =
    isMountedButton && typeCloseButton === "buttonIcon";

  const isMountedButtonName =
    isMountedButton && typeCloseButton === "buttonName";

  return {
    isVisibleHeader,
    isMountedButtonIcon,
    isMountedButtonName,
  };
};
