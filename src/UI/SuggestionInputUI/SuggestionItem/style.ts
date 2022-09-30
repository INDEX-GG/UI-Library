import styled, { css } from "styled-components";

const ActiveItemCSS = css`
  background-color: rgba(0, 0, 0, 0.1);
`;

const ButtonItemSC = styled("a")<{ activeIndex: boolean }>`
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  cursor: pointer;
  ${({ activeIndex }) => activeIndex && ActiveItemCSS}
`;

const ItemSC = styled("li")`
  font-size: 18px;
  line-height: 22px;
`;

export const useSuggestionItemStyle = () => ({
  ItemSC,
  ButtonItemSC,
});
