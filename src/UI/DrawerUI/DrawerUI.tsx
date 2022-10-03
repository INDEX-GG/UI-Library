import React from "react";
import {
  DefaultDrawerAnimationTiming,
  DefaultDrawerDirection,
  DefaultDrawerPortalName,
  DefaultDrawerStyleComponents,
  DrawerStylesObj,
  IDrawerProps,
} from "UI/DrawerUI/types";
import { createPortal } from "react-dom";
import { useDrawerUI } from "UI/DrawerUI/useDrawerUI";

export const DrawerUI = ({
  isOpen,
  children,
  handleClose,
  direction = DefaultDrawerDirection,
  animationTiming = DefaultDrawerAnimationTiming,
  portalName = DefaultDrawerPortalName,
  styleComponents = DefaultDrawerStyleComponents,
}: IDrawerProps) => {
  const {
    ContainerSC = DefaultContainerSC,
    WrapperSC = DefaultWrapperSC,
    BackdoorSC = DefaultBackdoorSC,
    InnerWrapperSC = DefaultInnerWrapperSC,
  } = styleComponents;
  const { isInnerOpen } = useDrawerUI({ isOpen, animationTiming, handleClose });

  return (
    <>
      {isInnerOpen && (
        <>
          {createPortal(
            <ContainerSC open={isOpen}>
              <WrapperSC>
                <InnerWrapperSC
                  open={isOpen}
                  direction={direction}
                  animationTiming={animationTiming}>
                  {children}
                </InnerWrapperSC>
              </WrapperSC>
              <BackdoorSC onClick={handleClose} />
            </ContainerSC>,
            portalName
              ? document.querySelector(portalName as string) || document.body
              : document.body,
          )}
        </>
      )}
    </>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  WrapperSC: DefaultWrapperSC,
  BackdoorSC: DefaultBackdoorSC,
  InnerWrapperSC: DefaultInnerWrapperSC,
} = DrawerStylesObj;

export default React.memo(DrawerUI);
