import { FC, InputHTMLAttributes } from "react";
import { useInputUIStyles } from "UI/InputUI/style";

// style-obj
export const InputUIStyledComponent = useInputUIStyles();

//export types
export type IconPositionType = "right" | "left" | "auto";

type excludesInputProps = "type" | "name" | "inputMode";

// inputProps
type InputPropsType = InputHTMLAttributes<HTMLInputElement>;
// required Input props
type RequiredInputProps = Required<Pick<InputPropsType, excludesInputProps>>;
// not required Input props
type NotRequiredInputProps = Omit<InputPropsType, excludesInputProps>;

// types
type inputStyledComponentsType = Partial<typeof InputUIStyledComponent>;
export type CustomInputPropsType = RequiredInputProps & NotRequiredInputProps;

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
  inputProps?: CustomInputPropsType;
  styledComponents?: inputStyledComponentsType;
}

// default constants
export const InputUIDefaultStyledComponents: inputStyledComponentsType =
  InputUIStyledComponent;
export const InputUIDefaultInputProps: CustomInputPropsType = {
  type: "text",
  inputMode: "text",
  name: "",
};
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
