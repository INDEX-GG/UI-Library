import styled from "styled-components";

const InputContainerSC = styled("div")`
  & > *:last-child {
    margin-right: 0;
  }
`;

const InputSC = styled("input")`
  width: 45px;
  height: 45px;
  margin-right: 20px;
  text-align: center;
  border-radius: 8px;
  border: 2px solid #00a0ab;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: inherit;
`;

export const useCodeFieldsUIStyles = () => ({
  InputSC,
  InputContainerSC,
});
