import { FC, InputHTMLAttributes } from "react";
import { useInputUIStyles } from "UI/InputUI/style";

// style-obj
export const InputUIStyledComponent = useInputUIStyles();

// types
type inputStyledComponentsType = Partial<typeof InputUIStyledComponent>;
type inputPropsType = InputHTMLAttributes<HTMLInputElement>;
type errorType = { isError: boolean; errorMessage: string; isErrorDOM: boolean };
type iconObjType = {
  isVisible: boolean;
  IconComponent: FC | null;
  position: "right" | "left" | "auto";
  onClick?: () => void;
};

// props
export interface IInputUIProps {
  iconObj?: iconObjType;
  error?: errorType;
  inputProps?: inputPropsType;
  styledComponents?: inputStyledComponentsType;
}

// default constants
export const InputUIDefaultStyledComponents: inputStyledComponentsType = InputUIStyledComponent;
export const InputUIDefaultInputProps: inputPropsType = {};
export const InputUIDefaultError: errorType = {
  isError: false,
  errorMessage: "",
  isErrorDOM: true,
};
export const InputUIDefaultIcon: iconObjType = {
  isVisible: false,
  IconComponent: null,
  position: "auto",
  onClick: undefined,
};
