import styled from "styled-components";
import { ToggleCheckboxCSS } from "UI/CheckboxUI/toggleCSS";
import { CheckboxType } from "UI/CheckboxUI/types";
import { CheckboxCSS } from "UI/CheckboxUI/checkboxCSS";

const CheckboxSC = styled("input")<{ checkboxType: CheckboxType }>`
  cursor: pointer;
  ${({ checkboxType }) =>
    checkboxType === "toggle" ? ToggleCheckboxCSS : CheckboxCSS};
`;

export const useCheckboxUIStyles = () => ({
  CheckboxSC,
});
