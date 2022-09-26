import { FC, InputHTMLAttributes } from "react";
import { useInputUIStyles } from "UI/InputUI/style";

// style-obj
export const InputUIStyledComponent = useInputUIStyles();

//export types
export type IconPositionType = "right" | "left" | "auto";

// types
type inputStyledComponentsType = Partial<typeof InputUIStyledComponent>;
export type InputPropsType = InputHTMLAttributes<HTMLInputElement>;
type errorType = {
  isError: boolean;
  errorMessage: string;
  isErrorDOM: boolean;
};
type iconObjType = {
  width: number;
  isVisible: boolean;
  IconComponent: FC | null;
  position: "right" | "left" | "auto";
  onClick?: () => void;
};

// props
export interface IInputUIProps {
  iconObj?: iconObjType;
  error?: errorType;
  inputProps?: InputPropsType;
  styledComponents?: inputStyledComponentsType;
}

// default constants
export const InputUIDefaultStyledComponents: inputStyledComponentsType =
  InputUIStyledComponent;
export const InputUIDefaultInputProps: InputPropsType = {};
export const InputUIDefaultError: errorType = {
  isError: false,
  errorMessage: "",
  isErrorDOM: true,
};
export const InputUIDefaultIcon: iconObjType = {
  width: 30,
  isVisible: false,
  IconComponent: null,
  position: "auto",
  onClick: undefined,
};
