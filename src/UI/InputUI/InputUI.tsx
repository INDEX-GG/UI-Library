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
      ContainerSC = ContainerDefaultSC,
      InputContainerSC = InputContainerDefaultSC,
      InputSC = InputDefaultSC,
      InputIconButtonSC = InputIconButtonDefaultSC,
      InputErrorTextSC = InputErrorTextDefaultSC,
      InputErrorContainerSC = InputErrorContainerDefaultSC,
    } = styledComponents as Required<typeof styledComponents>;

    //? main-logic
    const {
      errorMessage,
      isVisibleError,
      isError,
      IconComponent,
      isVisibleIcon,
    } = useInputUI({
      iconObj,
      error,
      inputProps,
    });

    console.log(iconObj);

    return (
      <ContainerSC>
        <InputContainerSC>
          <InputSC
            {...inputProps}
            ref={ref}
            isError={isError}
            iconWidth={iconObj.width}
            iconPosition={iconObj.position}
          />
          {isVisibleIcon && (
            <InputIconButtonSC
              iconWidth={iconObj.width}
              iconPosition={iconObj.position}
              onClick={iconObj.onClick}>
              {IconComponent && <IconComponent />}
            </InputIconButtonSC>
          )}
        </InputContainerSC>
        {isVisibleError && (
          <InputErrorContainerSC>
            <InputErrorTextSC isVisible={isError}>
              {errorMessage}
            </InputErrorTextSC>
          </InputErrorContainerSC>
        )}
      </ContainerSC>
    );
  },
);

InputUI.displayName = "InputUI";
const {
  ContainerSC: ContainerDefaultSC,
  InputContainerSC: InputContainerDefaultSC,
  InputSC: InputDefaultSC,
  InputIconButtonSC: InputIconButtonDefaultSC,
  InputErrorTextSC: InputErrorTextDefaultSC,
  InputErrorContainerSC: InputErrorContainerDefaultSC,
} = InputUIStyledComponent;
