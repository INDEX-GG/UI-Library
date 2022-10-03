import styled from "styled-components";

const mainColor = "#f5f5f5";
const secondaryColor = "#C7C7C7";
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
  min-height: 256px;
  border-radius: 8px;
  background-color: ${mainColor};
  border: 1px solid ${({ isError }) => (isError ? errorColor : secondaryColor)};
  padding: 17px 25px 17px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  font-family: inherit;
  &::placeholder {
    font-size: 16px;
    line-height: 21px;
    color: ${secondaryColor};
  }
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
