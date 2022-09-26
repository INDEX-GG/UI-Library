import React from "react";
import { InputUI } from "UI/InputUI/InputUI";
import { useInputPasswordUI } from "UI/InputPasswordUI/useInputPasswordUI";
import { IInputUIProps } from "UI/InputUI/types";
import PasswordShowIcon from "./assets/PasswordShowIcon/PasswordShowIcon";
import PasswordHiddenIcon from "./assets/PasswordHiddenIcon/PasswordHiddenIcon";

type IInputPasswordUIProps = Omit<IInputUIProps, "iconObj" | "iconObj"> &
  Required<Pick<IInputUIProps, "inputProps">>;

const InputPasswordUI = (props: IInputPasswordUIProps) => {
  //props
  const { inputProps, ...otherProps } = props;

  const { isShowPassword, passwordType, handleChangeShowPassword } =
    useInputPasswordUI(inputProps.onChange);
  const IconComponent = isShowPassword ? PasswordShowIcon : PasswordHiddenIcon;

  return (
    <InputUI
      {...otherProps}
      iconObj={{
        width: 80,
        isVisible: true,
        IconComponent,
        position: "right",
        onClick: handleChangeShowPassword,
      }}
      inputProps={{
        placeholder: "Введите пароль",
        ...inputProps,
        type: passwordType,
      }}
    />
  );
};

export default React.memo(InputPasswordUI);
