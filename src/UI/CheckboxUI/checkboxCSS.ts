import { css } from "styled-components";

const checkboxActiveColor = "#00A0AB";
const checkboxDisabledColor = "#ffffff";
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
  border: 1px solid gray;
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
