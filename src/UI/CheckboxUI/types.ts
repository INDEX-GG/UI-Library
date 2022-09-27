import { useCheckboxUIStyles } from "UI/CheckboxUI/style";
import { InputHTMLAttributes } from "react";

export const CheckboxUIStyleObj = useCheckboxUIStyles();

type CheckboxStyledComponents = Partial<typeof CheckboxUIStyleObj>;
type CheckboxCheckboxProps = InputHTMLAttributes<HTMLInputElement>;
export type CheckboxType = "toggle" | "checkbox";

export interface ICheckboxProps {
  type?: CheckboxType;
  checkboxProps?: CheckboxCheckboxProps;
  styledComponents?: CheckboxStyledComponents;
}

export const DefaultCheckboxType: CheckboxType = "checkbox";
export const DefaultCheckboxCheckboxProps: CheckboxCheckboxProps = {};
export const DefaultCheckboxPropsSC = CheckboxUIStyleObj;
