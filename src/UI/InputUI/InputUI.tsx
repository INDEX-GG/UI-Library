import React, { forwardRef } from "react";
import {
  IInputUIProps,
  InputUIDefaultError,
  InputUIDefaultIcon,
  InputUIDefaultInputProps,
  InputUIDefaultStyledComponents,
  InputUIStyledComponent,
} from "./types";
import { useInputUI } from "UI/InputUI/useInputUI";

export const InputUI = forwardRef<HTMLInputElement, IInputUIProps>(
  (
    {
      iconObj = InputUIDefaultIcon,
      error = InputUIDefaultError,
      inputProps = InputUIDefaultInputProps,
      styledComponents = InputUIDefaultStyledComponents,
    },
    ref,
  ) => {
    //? styled-components
    const {
      InputSC = InputDefaultSC,
      InputContainerSC = InputContainerDefaultSC,
      InputErrorTextSC = InputErrorTextDefaultSC,
      InputErrorContainerSC = InputErrorContainerDefaultSC,
    } = styledComponents as Required<typeof styledComponents>;
    //? main-logic
    const { errorMessage, isVisibleError, isError } = useInputUI({ iconObj, error, inputProps });

    return (
      <InputContainerSC>
        <InputSC {...inputProps} ref={ref} isError={isError} />
        {isVisibleError && (
          <InputErrorContainerSC>
            <InputErrorTextSC isVisible={isError}>{errorMessage}</InputErrorTextSC>
          </InputErrorContainerSC>
        )}
      </InputContainerSC>
    );
  },
);

InputUI.displayName = "InputUI";
const {
  InputSC: InputDefaultSC,
  InputContainerSC: InputContainerDefaultSC,
  InputErrorTextSC: InputErrorTextDefaultSC,
  InputErrorContainerSC: InputErrorContainerDefaultSC,
} = InputUIStyledComponent;
