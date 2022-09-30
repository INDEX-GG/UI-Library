import styled from "styled-components";

const ContainerSC = styled("div")`
  width: 100%;
`;
const InputSC = styled("input")`
  width: 100%;
  height: 50px;
  padding: 20px 10px;
  border-radius: 5px;
  border: 1px solid #585858;
  //text
  font-family: inherit;
  font-size: 16px;
  line-height: 20px;
`;

const SuggestionContainerSC = styled("div")`
  margin-top: 10px;
  width: 100%;
  position: relative;
`;

const SuggestionWrapperSC = styled("ul")`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  & > *:last-child {
    padding-bottom: 0;
  }
`;

export const useSuggestionInputUIStyles = () => ({
  ContainerSC,
  InputSC,
  SuggestionContainerSC,
  SuggestionWrapperSC,
});
