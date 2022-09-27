import { css } from "styled-components";

const toggleWidth = 60;
const toggleHeight = 30;
const toggleRadius = 20;

const ToggleStyleBeforeCSS = css`
  content: '';
  width: ${toggleWidth / 2}px;
  height: 100%;
  border-radius: ${toggleRadius}px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0 ,0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  transition: .2s;
,`;

const ToggleStyleCSS = css`
  position: relative;
  width: ${toggleWidth}px;
  height: ${toggleHeight}px;
  appearance: none;
  background-color: gray;
  border-radius: ${toggleRadius}px;
  transition: 0.2s;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  &:before {
    ${ToggleStyleBeforeCSS}
  }
`;

const ToggleStyleBeforeCheckedCSS = css`
  left: calc(100% - ${toggleWidth / 2}px);
`;

const ToggleStyleCheckedCSS = css`
  background-color: #00a0ab;
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
