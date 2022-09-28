import { ReactNode } from "react";
import { useModalUIStyles } from "UI/ModalUI/style";

export const ModalStyleObj = useModalUIStyles();

type PortalName = "#root";

type type = "modal" | "popup" | "fullscreen";
type ModalPortalObj = { isPortal: boolean; name?: PortalName };
type ModalIsVisibleClose = boolean;
type ModalStyleComponents = Partial<typeof ModalStyleObj>;

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  type?: type;
  portalObj?: ModalPortalObj;
  isVisibleClose?: ModalIsVisibleClose;
  styleComponents?: ModalStyleComponents;
}

export type ModalContentProps = Required<
  Omit<IModalProps, "portalObj" | "isOpen">
>;

export const DefaultModalPortalObj: ModalPortalObj = {
  isPortal: true,
  name: "#root",
};
export const DefaultModalIsVisibleClose: ModalIsVisibleClose = true;
export const DefaultModalType: type = "modal";
export const DefaultModalStyleComponents: ModalStyleComponents = ModalStyleObj;
