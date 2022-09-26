import { InputHTMLAttributes, ReactNode } from "react";
import { useTextAreaUIStyles } from "UI/TextAreaUI/style";

export const TextAreaStylesObj = useTextAreaUIStyles();

type TextAreaStyledComponentsType = Partial<typeof TextAreaStylesObj>;
type TextAreaPropsType = InputHTMLAttributes<HTMLTextAreaElement>;
type TextAreaErrorType = {
  isError: boolean;
  errorMessage: string;
};

export interface ITextAreaUIProps {
  children?: ReactNode;
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
