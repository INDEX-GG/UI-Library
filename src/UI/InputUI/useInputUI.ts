import { IInputUIProps } from "UI/InputUI/types";

export const useInputUI = (props: Required<Omit<IInputUIProps, "styledComponents">>) => {
  const { error } = props;
  // ?error
  const { isError, errorMessage, isErrorDOM } = error;
  const isVisibleError = isErrorDOM ? true : isError;
  return {
    isError,
    errorMessage,
    isVisibleError,
  };
};
