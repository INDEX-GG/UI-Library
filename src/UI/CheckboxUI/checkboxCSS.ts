import { css } from "styled-components";

const checkboxActiveColor = "#585858";
const checkboxDisabledColor = "#E9E9E9";
const checkboxWidth = 30;
const checkboxHeight = 30;
const checkboxRadius = 20;

const CheckboxStyleCSS = css`
  position: relative;
  width: ${checkboxWidth}px;
  height: ${checkboxHeight}px;
  appearance: none;
  background-color: ${checkboxDisabledColor};
  border-radius: ${checkboxRadius}px;
  transition: 0.2s;
`;

const CheckboxCheckedStyleCSS = css`
  background-color: ${checkboxActiveColor};
`;

export const CheckboxCSS = css`
  &[type="checkbox"] {
    ${CheckboxStyleCSS}
  }
  &:checked[type="checkbox"] {
    ${CheckboxCheckedStyleCSS}
  }
`;
