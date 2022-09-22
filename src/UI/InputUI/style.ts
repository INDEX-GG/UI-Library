import styled, { css } from "styled-components";

export const InputUISC = styled("input")`
  // default
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px 0;
  //placeholder
  &::placeholder {
    text-transform: uppercase;
    font-size: inherit;
  }
  // focus
  &:focus {
    border: 1px solid lightblue;
  }
  ${moreInputStyleCSS}
`;

export const useInputUIStyles = () => ({
  InputUISC,
});
