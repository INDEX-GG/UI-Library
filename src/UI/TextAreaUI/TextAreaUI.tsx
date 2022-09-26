import React from "react";
import {
  DefaultTextAreaErrorProps,
  DefaultTextAreaHTMLProps,
  DefaultTextAreaStyledComponents,
  ITextAreaUIProps,
  TextAreaStylesObj,
} from "UI/TextAreaUI/types";

export const TextAreaUI = ({
  children,
  isAutoHeight = true,
  error = DefaultTextAreaErrorProps,
  textAreaProps = DefaultTextAreaHTMLProps,
  styledComponents = DefaultTextAreaStyledComponents,
}: ITextAreaUIProps) => {
  const { isError, errorMessage } = error;
  const {
    TextAreaSC = DefaultTextAreaSC,
    ContainerSC = DefaultContainerSC,
    ErrorMessageSC = DefaultErrorMessageSC,
  } = styledComponents;

  return (
    <ContainerSC>
      <TextAreaSC {...textAreaProps} isError={isError}>
        {children}
      </TextAreaSC>
      {errorMessage && <ErrorMessageSC>{errorMessage}</ErrorMessageSC>}
    </ContainerSC>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  TextAreaSC: DefaultTextAreaSC,
  ErrorMessageSC: DefaultErrorMessageSC,
} = TextAreaStylesObj;

export default React.memo(TextAreaUI);
