import styled from "styled-components";

const mainColor = "#00a0ab";
const errorColor = "red";

const InputContainerSC = styled("div")`
  width: 100%;
  position: relative;
`;

const InputSC = styled("input")<{ isError: boolean }>`
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid ${({ isError }) => (isError ? errorColor : mainColor)};
  border-radius: 10px;
  padding: 10px;
  &::placeholder {
    color: ${({ isError }) => (isError ? errorColor : mainColor)};
    font-size: inherit;
  }
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
  InputSC,
  InputErrorTextSC,
  InputContainerSC,
  InputErrorContainerSC,
});
