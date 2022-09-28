import styled, { css } from "styled-components";
import { IModalProps } from "UI/ModalUI/types";

const PopupCSS = css`
  border-radius: 10px;
  width: 300px;
  height: 300px;
`;

const ModalCSS = css`
  border-radius: 10px;
  min-width: 500px;
  min-height: 500px;
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

const WrapperSC = styled("div")<Pick<IModalProps, "type">>`
  position: relative;
  z-index: 2;
  background-color: #ffffff;
  ${({ type }) =>
    type === "popup"
      ? PopupCSS
      : type === "modal"
      ? ModalCSS
      : type === "fullscreen"
      ? FullscreenCSS
      : null}
`;

const InnerWrapperSC = styled("div")`
  padding: 20px;
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

const HeaderFullscreenModalSC = styled("div")`
  background-color: #00a0ab;
  padding: 20px;
`;

export const useModalUIStyles = () => ({
  ContainerSC,
  WrapperSC,
  BackdoorSC,
  InnerWrapperSC,
  CloseButtonSC,
  HeaderFullscreenModalSC,
});
