import React, { forwardRef, useRef } from "react";
import {
  DefaultTextAreaErrorProps,
  DefaultTextAreaHTMLProps,
  DefaultTextAreaStyledComponents,
  ITextAreaUIProps,
  TextAreaRefType,
  TextAreaStylesObj,
} from "UI/TextAreaUI/types";
import { useTextAreaUI } from "UI/TextAreaUI/useTextAreaUI";

export const TextAreaUI = forwardRef<HTMLTextAreaElement, ITextAreaUIProps>(
  (
    {
      isAutoHeight = true,
      error = DefaultTextAreaErrorProps,
      textAreaProps = DefaultTextAreaHTMLProps,
      styledComponents = DefaultTextAreaStyledComponents,
    },
    otherTextAreaRef,
  ) => {
    //? error
    const { isError, errorMessage } = error;

    //? styled-components
    const {
      TextAreaSC = DefaultTextAreaSC,
      ContainerSC = DefaultContainerSC,
      ErrorMessageSC = DefaultErrorMessageSC,
    } = styledComponents;

    //? inner or other ref
    const textAreaRef = otherTextAreaRef
      ? (otherTextAreaRef as TextAreaRefType)
      : (useRef<HTMLTextAreaElement>(null) as TextAreaRefType);

    // ? only isAutoHeight
    useTextAreaUI({ textAreaProps, textAreaRef });

    return (
      <ContainerSC>
        <TextAreaSC
          ref={textAreaRef}
          {...textAreaProps}
          isError={isError}
          isAutoHeight={isAutoHeight}
        />
        {errorMessage && <ErrorMessageSC>{errorMessage}</ErrorMessageSC>}
      </ContainerSC>
    );
  },
);

const {
  ContainerSC: DefaultContainerSC,
  TextAreaSC: DefaultTextAreaSC,
  ErrorMessageSC: DefaultErrorMessageSC,
} = TextAreaStylesObj;

TextAreaUI.displayName = "TextAreaUI";
export default React.memo(TextAreaUI);
