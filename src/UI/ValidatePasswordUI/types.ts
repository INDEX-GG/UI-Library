import { useValidatePasswordUIStyles } from "UI/ValidatePasswordUI/style";

export type ValidateRulesItem = {
  id: number;
  title: string;
  regExp?: RegExp;
  checkFunction?: (value: string) => boolean;
};

export const ValidatePasswordStyleObj = useValidatePasswordUIStyles();

type ValidatePasswordStyleComponents = Partial<typeof ValidatePasswordStyleObj>;

export interface IValidatePasswordProps {
  value: string;
  handleChangeValidate: (state: boolean) => void;
  styleComponents?: ValidatePasswordStyleComponents;
}

export const DefaultValidatePasswordStyleComponents: ValidatePasswordStyleComponents =
  ValidatePasswordStyleObj;
