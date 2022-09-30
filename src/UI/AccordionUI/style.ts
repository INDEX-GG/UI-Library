import styled, { css } from "styled-components";

const ContainerSC = styled("div")`
  width: 100%;
  background-color: #c2c2c2;
  border: 1px solid red;
`;

const HeaderButtonSC = styled("button")`
  width: 100%;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const HeaderIconSC = styled("div")`
  width: 40px;
`;

const BodyShowCSS = css`
  visibility: visible;
`;

const BodySC = styled("div")<{
  isShow: boolean;
  height: number;
  duration: number;
}>`
  // animation style
  overflow: hidden;
  transition: all ${({ duration }) => duration}s ease-in-out;
  max-height: ${({ isShow, height }) => (isShow ? height : 0)}px;
  // other style
  ${({ isShow }) => isShow && BodyShowCSS};
`;

const ContentSC = styled("div")`
  padding: 20px;
`;

export const useAccordionUIStyles = () => ({
  BodySC,
  ContentSC,
  ContainerSC,
  HeaderIconSC,
  HeaderButtonSC,
});
