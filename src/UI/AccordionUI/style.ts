import styled, { css } from "styled-components";

const ContainerSC = styled("div")`
  width: 100%;
  background-color: lightgreen;
`;

const HeaderButtonSC = styled("button")`
  width: 100%;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
`;

const HeaderIconSC = styled("div")`
  width: 20px;
  background-color: blue;
`;

const BodyShowCSS = css`
  opacity: 1;
  visibility: visible;
`;

const BodySC = styled("div")<{ isShow: boolean; height: number }>`
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  height: ${({ isShow, height }) => (isShow ? height : 0)}px;
  ${({ isShow }) => isShow && BodyShowCSS};
`;

export const useAccordionUIStyles = () => ({
  BodySC,
  ContainerSC,
  HeaderIconSC,
  HeaderButtonSC,
});
