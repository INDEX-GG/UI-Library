import { ChangeEvent, useState } from "react";
import { PasswordInputPropsChangeType } from "UI/InputPasswordUI/types";

const validatePassword = (
  value: string,
): { value: string; isValid: boolean } => {
  // check only english letter, number, default symbol and empty value
  const isValidate =
    !!value.match(/^[a-zA-Z0-9!@?#$%^&*()_=+;:№]+$/) || value === "";

  if (isValidate) {
    return { value, isValid: isValidate };
  }
  return {
    value: "",
    isValid: isValidate,
  };
};

export const useInputPasswordUI = (
  onChangeInputProps: PasswordInputPropsChangeType,
) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>();
  const passwordType: "text" | "password" = isShowPassword
    ? "text"
    : "password";

  const handleChangeShowPassword = () =>
    setIsShowPassword((prevState) => !prevState);

  // modification change value;
  const handleModificationPasswordValue = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, isValid } = validatePassword(e.target.value);
    if (isValid) {
      const mutationEvent = { ...e, target: { ...e.target, value } };
      onChangeInputProps(mutationEvent);
    }
  };

  return {
    passwordType,
    isShowPassword,
    handleChangeShowPassword,
    handleModificationPasswordValue,
  };
};
