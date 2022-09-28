import styled from "styled-components";

const mainColor = "#00a0ab";
const errorColor = "red";

const ContainerSC = styled("div")`
  position: relative;
`;

const TextAreaSC = styled("textarea")<{
  isError: boolean;
  isAutoHeight: boolean;
}>`
  resize: none;
  overflow: ${({ isAutoHeight }) => (isAutoHeight ? "hidden" : "auto")};
  width: 100%;
  min-height: 200px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? errorColor : mainColor)};
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  font-family: inherit;
`;

const ErrorMessageSC = styled("p")`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: ${errorColor};
  //? absolute variant
  //position: absolute;
  //left: 10px;
  //bottom: -15px;
  //? block variant
  margin: 0 0 10px 10px;
`;

export const useTextAreaUIStyles = () => ({
  TextAreaSC,
  ContainerSC,
  ErrorMessageSC,
});
