import { IInputUIProps } from "UI/InputUI/types";

export const useInputUI = (
  props: Required<Omit<IInputUIProps, "styledComponents">>,
) => {
  //? props
  const { error, iconObj } = props;
  const { IconComponent } = iconObj;

  //? icon
  const isVisibleIcon = iconObj.isVisible && IconComponent;

  //? error
  const { isError, errorMessage, isErrorDOM } = error;
  const isVisibleError = isErrorDOM ? true : isError;

  return {
    // error
    isError,
    errorMessage,
    isVisibleError,
    // icon
    IconComponent,
    isVisibleIcon,
  };
};
