import React from "react";
import { InputUI } from "UI/InputUI/InputUI";
import { useInputPasswordUI } from "UI/InputPasswordUI/useInputPasswordUI";
import PasswordShowIcon from "./assets/PasswordShowIcon/PasswordShowIcon";
import PasswordHiddenIcon from "./assets/PasswordHiddenIcon/PasswordHiddenIcon";
import { IInputPasswordUIProps } from "UI/InputPasswordUI/types";

export const InputPasswordUI = (props: IInputPasswordUIProps) => {
  //props
  const { inputProps, ...otherProps } = props;
  const { onChange: onChangeInputProps } = inputProps;

  // main-logic
  const {
    isShowPassword,
    passwordType,
    handleChangeShowPassword,
    handleModificationPasswordValue,
  } = useInputPasswordUI(onChangeInputProps);

  // icon
  const IconComponent = isShowPassword ? PasswordShowIcon : PasswordHiddenIcon;

  return (
    <InputUI
      {...otherProps}
      iconObj={{
        width: 40,
        isVisible: true,
        IconComponent,
        position: "right",
        onClick: handleChangeShowPassword,
      }}
      inputProps={{
        name: "password",
        placeholder: "Введите пароль",
        ...inputProps,
        type: passwordType,
        onChange: handleModificationPasswordValue,
      }}
    />
  );
};

export default React.memo(InputPasswordUI);
