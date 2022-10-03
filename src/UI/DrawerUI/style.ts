import styled, { css, keyframes } from "styled-components";
import { IDrawerProps } from "UI/DrawerUI/types";

type OpenProps = {
  open: Pick<IDrawerProps, "isOpen">["isOpen"];
};
type DirectionProps = Pick<IDrawerProps, "direction">;
type AnimationTimingProps = Required<Pick<IDrawerProps, "animationTiming">>;

const drawerZIndex = 10;

const transformAnim = keyframes`
  to {
    transform: translate(0px, 0px);
  }
`;

const transformAnimRevert = (direction: DirectionProps["direction"]) => {
  let x = 110;
  let y = 110;

  switch (direction) {
    case "right":
      x = 110;
      y = 0;
      break;
    case "bottom":
      x = 0;
      y = 110;
      break;
    case "left":
      x = -110;
      y = 0;
      break;
    case "top":
      x = 0;
      y = -110;
      break;
  }

  const revertTranslate = `translate(${x}%, ${y}%)`;
  return keyframes`
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: ${revertTranslate};
  }
`;
};

const DirectionLeftCSS = css`
  left: 0;
  top: 0;
  transform: translateX(-110%);
`;
const DirectionRightCSS = css`
  top: 0;
  right: 0;
  transform: translateX(110%);
`;
const DirectionBottomCSS = css`
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  min-height: 50px;
  transform: translateY(110%);
`;

const DirectionTopCSS = css`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 50px;
  transform: translateY(-110%);
`;

const ContainerSC = styled("div")<OpenProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${drawerZIndex};
  left: 0;
  top: 0;
  background-color: transparent;
`;
const WrapperSC = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: inherit;
`;
const BackdoorSC = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: ${drawerZIndex + 1};
  background-color: rgba(0, 0, 0, 0.1);
`;
const InnerWrapperSC = styled("div")<
  OpenProps & DirectionProps & AnimationTimingProps
>`
  height: 100%;
  background-color: lightblue;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  ${({ direction }) => {
    switch (direction) {
      case "left":
        return DirectionLeftCSS;
      case "right":
        return DirectionRightCSS;
      case "bottom":
        return DirectionBottomCSS;
      case "top":
        return DirectionTopCSS;
    }
  }}
  z-index: ${drawerZIndex + 2};
  animation: ${({ animationTiming }) => animationTiming}s
    ${({ open, direction }) =>
      open ? transformAnim : transformAnimRevert(direction)}
    linear;
  animation-fill-mode: forwards;
`;

export const useDrawerUIStyles = () => ({
  ContainerSC,
  WrapperSC,
  BackdoorSC,
  InnerWrapperSC,
});
