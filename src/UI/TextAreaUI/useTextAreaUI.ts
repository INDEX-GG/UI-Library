import { ITextAreaUIProps, TextAreaRefType } from "UI/TextAreaUI/types";
import { useEffect } from "react";

type TextAreaUIType = Required<Pick<ITextAreaUIProps, "textAreaProps">> & {
  textAreaRef: TextAreaRefType;
};

export const useTextAreaUI = ({
  textAreaProps,
  textAreaRef,
}: TextAreaUIType) => {
  const { value } = textAreaProps;

  useEffect(() => {
    if (typeof value !== undefined) {
      const textAreaDOM = textAreaRef.current;
      if (textAreaDOM) {
        textAreaDOM.style.height = "auto";
        textAreaDOM.style.height = `${textAreaDOM.scrollHeight}px`;
      }
    }
  }, [value]);
};
