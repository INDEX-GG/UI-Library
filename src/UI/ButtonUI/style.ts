import styled, { css } from "styled-components";
import { IButtonProps } from "UI/ButtonUI/types";

//! Button
const AutoWidthCSS = css`
  width: 100%;
  height: 100%;
`;

const IconButtonCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IButtonSCProps extends Pick<IButtonProps, "isAutoWidth"> {
  isIcon: boolean;
}

const ButtonSC = styled("button")<IButtonSCProps>`
  ${({ isAutoWidth }) => isAutoWidth && AutoWidthCSS}
  ${({ isIcon }) => isIcon && IconButtonCSS}
  position: relative;
  overflow: hidden;
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  cursor: pointer;
  padding: 5px 20px;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  background-color: #00a0ab;
  transition: 0.2s all linear;
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
    &:hover {
      background-color: gray;
    }
  }

  &:hover {
    background-color: #01616c;
  }
`;

//! icon
type RequiredIconProps = Required<Pick<IButtonProps, "iconObj">>;
type IconContainerSCProps = Pick<RequiredIconProps["iconObj"], "position">;

const IconContainerSC = styled("div")<IconContainerSCProps>`
  width: 24px;
  height: 24px;
  margin: ${({ position }) =>
    position === "auto" || position === "left" ? "0 10px 0 0" : "0 0 0 10px"};
`;

export const useButtonUIStyles = () => ({
  ButtonSC,
  IconContainerSC,
});
