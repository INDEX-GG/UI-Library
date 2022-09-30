import styled from "styled-components";
import { IconPositionType } from "UI/InputUI/types";

interface IInputIcon {
  iconPosition: IconPositionType;
  iconWidth: number;
}

interface IInput extends Partial<IInputIcon> {
  isError: boolean;
}

const mainColor = "#00a0ab";
const errorColor = "red";

const ContainerSC = styled("div")`
  width: 100%;
  position: relative;
`;

const InputContainerSC = styled("div")`
  position: relative;
  overflow: hidden;
`;

const InputSC = styled("input")<IInput>`
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid ${({ isError }) => (isError ? errorColor : mainColor)};
  border-radius: 10px;
  padding: ${({ iconPosition = "left", iconWidth = 10 }) =>
    iconPosition == "right"
      ? `10px ${iconWidth + 10}px  10px 10px`
      : iconPosition === "left"
      ? `10px 10px 10px ${iconWidth + 10}px`
      : "10px"};
  &::placeholder {
    color: ${({ isError }) => (isError ? errorColor : mainColor)};
    font-size: inherit;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const InputIconButtonSC = styled("button")<IInputIcon>`
  width: ${({ iconWidth }) => iconWidth}px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top: 0;
  padding: ${({ iconPosition }) =>
    iconPosition === "right"
      ? "0 15px 0 0"
      : iconPosition === "left"
      ? "0 0 0 15px"
      : 0};
  right: ${({ iconPosition }) => (iconPosition === "right" ? 0 : "auto")};
  left: ${({ iconPosition }) => (iconPosition === "left" ? 0 : "auto")};

  // delete inherit global style
  border: 0;
  cursor: pointer;
`;

const InputErrorContainerSC = styled("div")`
  width: 100%;
`;

const InputErrorTextSC = styled("p")<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  font-size: 14px;
  line-height: 16px;
  padding: 5px 0 0 10px;
  color: ${errorColor};
  word-break: break-word;
`;

export const useInputUIStyles = () => ({
  ContainerSC,
  InputContainerSC,
  InputSC,
  InputIconButtonSC,
  InputErrorContainerSC,
  InputErrorTextSC,
});
