import { InputHTMLAttributes, RefObject } from "react";
import { useTextAreaUIStyles } from "UI/TextAreaUI/style";

export const TextAreaStylesObj = useTextAreaUIStyles();

export type TextAreaRefType = RefObject<HTMLTextAreaElement>;
type TextAreaStyledComponentsType = Partial<typeof TextAreaStylesObj>;
type TextAreaPropsType = InputHTMLAttributes<HTMLTextAreaElement>;
type TextAreaErrorType = {
  isError: boolean;
  errorMessage: string;
};

export interface ITextAreaUIProps {
  isAutoHeight?: boolean;
  error?: TextAreaErrorType;
  textAreaProps?: TextAreaPropsType;
  styledComponents?: TextAreaStyledComponentsType;
}

export const DefaultTextAreaErrorProps: TextAreaErrorType = {
  isError: false,
  errorMessage: "",
};

export const DefaultTextAreaHTMLProps: TextAreaPropsType = {};
export const DefaultTextAreaStyledComponents: Required<TextAreaStyledComponentsType> =
  TextAreaStylesObj;
