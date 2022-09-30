import { useSuggestionInputUIStyles } from "UI/SuggestionInputUI/style";
import { FC, InputHTMLAttributes } from "react";

// default suggestion item props
export interface IDefaultSuggestionItemProps {
  index: number;
  activeSuggestion: number;
  handleHoverSuggestion: (state: number) => () => void;
}

// change any to normal T
type SUGInputData = any;

export const SuggestionInputStyleObj = useSuggestionInputUIStyles();

type SUGInputSuggestionCount = number;
type SUGInputInputProps = InputHTMLAttributes<HTMLInputElement>;
type SUGInputStyleComponents = Partial<typeof SuggestionInputStyleObj>;

export interface ISuggestionInputProps {
  data: SUGInputData[];
  dataValueKey: string;
  handleChangeValue: (search: string) => void;
  SuggestionItemComp: FC<any>;
  suggestionCount?: SUGInputSuggestionCount;
  inputProps?: SUGInputInputProps;
  styleComponents?: SUGInputStyleComponents;
}

export const DefaultSUGInputSuggestionCount: SUGInputSuggestionCount = 5;
export const DefaultSUGInputInputProps: SUGInputInputProps = {};
export const DefaultSUGInputStyleComponents: SUGInputStyleComponents =
  SuggestionInputStyleObj;
