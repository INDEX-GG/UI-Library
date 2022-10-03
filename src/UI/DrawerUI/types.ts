import { useDrawerUIStyles } from "UI/DrawerUI/style";
import { ReactNode } from "react";

export const DrawerStylesObj = useDrawerUIStyles();

type DrawerDirection = "left" | "right" | "top" | "bottom";
type DrawerAnimationTiming = number;
type DrawerPortalName = "#root" | "root" | "__next" | "";
type DrawerStyleComponents = Partial<typeof DrawerStylesObj>;

export interface IDrawerProps {
  isOpen: boolean;
  children: ReactNode;
  handleClose: () => void;
  portalName?: DrawerPortalName;
  animationTiming?: DrawerAnimationTiming;
  direction?: DrawerDirection;
  styleComponents?: DrawerStyleComponents;
}

export const DefaultDrawerPortalName: DrawerPortalName = "__next";
export const DefaultDrawerAnimationTiming = 0.2;
export const DefaultDrawerDirection: DrawerDirection = "left";
export const DefaultDrawerStyleComponents: DrawerStyleComponents =
  DrawerStylesObj;
