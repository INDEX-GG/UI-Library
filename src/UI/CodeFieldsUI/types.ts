import { useCodeFieldsUIStyles } from "UI/CodeFieldsUI/style";

export const CodeFieldsUIStylesObj = useCodeFieldsUIStyles();

export type HandleChangeCodeArrType = (value: string, position: number) => void;

export interface ICodeFieldsUIProps {
  fieldsCount: number;
  callbackGetFinalCode: (code: string) => void;
}

export interface IInputCodeProps {
  id: number;
  value: string;
  handleChangeCodeArr: HandleChangeCodeArrType;
}
