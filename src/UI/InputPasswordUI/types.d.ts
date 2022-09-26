import { ChangeEventHandler } from "react";
import { IInputUIProps } from "UI/InputUI/types";
export type PasswordInputPropsChangeType = ChangeEventHandler<HTMLInputElement>;

// delete iconObj and inputProps
type DeleteType = Omit<IInputUIProps, "iconObj" | "inputProps">;

// required inputProps any key
type RequiredProps = Required<Pick<IInputUIProps, "inputProps">>;

// required inputProps only value and onChange
type RequiredInputPropsPassword = Required<
  Pick<RequiredProps["inputProps"], "value" | "onChange">
>;

// add not required key inputProps and delete required key
type NotRequiredInputPropsPassword = Omit<
  RequiredProps["inputProps"],
  "value" | "onChange"
>;

export type InputPropsPassword = RequiredInputPropsPassword &
  NotRequiredInputPropsPassword;

export type IInputPasswordUIProps = DeleteType & {
  inputProps: InputPropsPassword;
};
