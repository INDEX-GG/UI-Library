import styled, { css, keyframes } from "styled-components";
import { IModalProps } from "UI/ModalUI/types";

const visibleAnimation = keyframes`
  from {
    margin-top: 80px;
    opacity: 0;
  }
  to {
    margin-top: 30px;
    opacity: 1;
  }
`;

const PopupCSS = css`
  border-radius: 10px;
  margin: 30px;
  width: 300px;
`;

const ModalCSS = css`
  border-radius: 10px;
  margin: 30px;
  width: 500px;
`;

const FullscreenCSS = css`
  width: 100%;
  height: 100%;
`;

const ContainerSC = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperSC = styled("div")<
  Pick<IModalProps, "type" | "isAnimationEffect">
>`
  background-color: #ffffff;
  position: relative;
  z-index: 2;
  animation: ${({ isAnimationEffect, type }) =>
      isAnimationEffect && type !== "fullscreen" ? visibleAnimation : "none"}
    0.3s linear;
  ${({ type }) =>
    type === "popup"
      ? PopupCSS
      : type === "modal"
      ? ModalCSS
      : type === "fullscreen"
      ? FullscreenCSS
      : null}
`;

const BackdoorSC = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const InnerWrapperSC = styled("div")`
  padding: 20px;
  height: 120%;
  display: flex;
  flex-direction: column;
`;

const HeaderFullscreenModalSC = styled("div")`
  background-color: #00a0ab;
  padding: 20px;
`;

const ChildrenContainerSC = styled("div")`
  flex-grow: 1;
`;

const CloseButtonSC = styled("button")`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  right: -30px;
  z-index: 2;
`;

const CloseButtonNameSC = styled("button")`
  // button
  width: 100%;
  padding: 10px 0;
  border: 0;
  border-radius: 40px;
  background-color: #585858;
  cursor: pointer;
  // button-text
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;

export const useModalUIStyles = () => ({
  ContainerSC,
  WrapperSC,
  BackdoorSC,
  InnerWrapperSC,
  HeaderFullscreenModalSC,
  ChildrenContainerSC,
  CloseButtonSC,
  CloseButtonNameSC,
});
