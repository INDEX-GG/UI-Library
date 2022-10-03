import { css } from "styled-components";

const toggleWidth = 33;
const toggleHeight = 12;
const toggleRadius = 7;

const ToggleStyleBeforeCSS = css`
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #C7C7C7;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: -4px;
  left: -5px;
  transition: .2s;
,`;

const ToggleStyleCSS = css`
  position: relative;
  width: ${toggleWidth}px;
  height: ${toggleHeight}px;
  appearance: none;
  background-color: #e9e9e9;
  border-radius: ${toggleRadius}px;
  transition: 0.2s;

  &:before {
    ${ToggleStyleBeforeCSS}
  }
`;

const ToggleStyleBeforeCheckedCSS = css`
  background-color: #00a0ab;
  left: calc(100% - ${toggleWidth / 2}px);
`;

const ToggleStyleCheckedCSS = css`
  background-color: rgba(82, 185, 197, 0.5);
  &:before {
    ${ToggleStyleBeforeCheckedCSS}
  }
`;

export const ToggleCheckboxCSS = css`
  &[type="checkbox"] {
    ${ToggleStyleCSS}
  }
  &:checked[type="checkbox"] {
    ${ToggleStyleCheckedCSS}
  }
`;
