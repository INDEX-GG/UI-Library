import { ChangeEventHandler, useState } from "react";

type InputPropsChange = ChangeEventHandler<HTMLInputElement> | undefined;

export const useInputPasswordUI = (
  handleChangeNativeInput: InputPropsChange,
) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>();
  const passwordType: "text" | "password" = isShowPassword
    ? "text"
    : "password";

  const handleChangeShowPassword = () =>
    setIsShowPassword((prevState) => !prevState);

  const handleModificationPasswordValue = (e) => {
    handleChangeNativeInput();
  };

  return {
    passwordType,
    isShowPassword,
    handleChangeShowPassword,
  };
};
