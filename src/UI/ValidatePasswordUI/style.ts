import styled from "styled-components";

const ContainerSC = styled("ul")`
  list-style: none;
  & > *:last-child {
    margin-bottom: 0;
  }
`;
const ItemSC = styled("li")<{ isActive: boolean }>`
  list-style: none;
  transition: 0.2s all linear;
  color: ${({ isActive }) => (isActive ? "black" : "red")};
  margin-bottom: 10px;
`;

export const useValidatePasswordUIStyles = () => ({
  ContainerSC,
  ItemSC,
});
