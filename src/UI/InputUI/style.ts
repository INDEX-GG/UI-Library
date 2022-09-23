import styled from "styled-components";

export const InputUISC = styled("input")`
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px 0;
  &::placeholder {
    text-transform: uppercase;
    font-size: inherit;
  }
  &:focus {
    border: 1px solid lightblue;
  }
`;

export const useInputUIStyles = () => ({
  InputUISC,
});
