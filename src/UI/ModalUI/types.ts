import { ReactNode } from "react";
import { useModalUIStyles } from "UI/ModalUI/style";

export const ModalStyleObj = useModalUIStyles();

type PortalName = "#root";

type type = "modal" | "popup" | "fullscreen";
type ModalIsAnimationEffect = boolean;
type ModalPortalObj = { isPortal: boolean; name?: PortalName };
type ModalTypeCloseButton = "buttonName" | "buttonIcon" | "";
type ModalStyleComponents = Partial<typeof ModalStyleObj>;

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  type?: type;
  isAnimationEffect?: ModalIsAnimationEffect;
  portalObj?: ModalPortalObj;
  typeCloseButton?: ModalTypeCloseButton;
  styleComponents?: ModalStyleComponents;
}

export type ModalContentProps = Required<
  Omit<IModalProps, "portalObj" | "isOpen">
>;

export const DefaultModalType: type = "modal";
export const DefaultModalIsAnimationEffect: ModalIsAnimationEffect = true;
export const DefaultModalPortalObj: ModalPortalObj = {
  isPortal: true,
  name: "#root",
};
export const DefaultModalTypeCloseButton: ModalTypeCloseButton = "buttonName";
export const DefaultModalStyleComponents: ModalStyleComponents = ModalStyleObj;
