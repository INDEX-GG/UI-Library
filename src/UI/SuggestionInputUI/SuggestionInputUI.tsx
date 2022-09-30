import React from "react";
import {
  DefaultSUGInputInputProps,
  DefaultSUGInputStyleComponents,
  DefaultSUGInputSuggestionCount,
  ISuggestionInputProps,
  SuggestionInputStyleObj,
} from "UI/SuggestionInputUI/types";
import { useSuggestionInputUI } from "UI/SuggestionInputUI/useSuggestionInputUI";

export const SuggestionInputUI = ({
  data,
  dataValueKey,
  handleChangeValue,
  SuggestionItemComp,
  suggestionCount = DefaultSUGInputSuggestionCount,
  inputProps = DefaultSUGInputInputProps,
  styleComponents = DefaultSUGInputStyleComponents,
}: ISuggestionInputProps) => {
  const {
    ContainerSC = DefaultContainerSC,
    InputSC = DefaultInputSC,
    SuggestionContainerSC = DefaultSuggestionContainerSC,
    SuggestionWrapperSC = DefaultSuggestionWrapperSC,
  } = styleComponents;

  const value = inputProps?.value || "";

  const {
    onChange,
    inputValue,
    handleBlur,
    handleFocus,
    handleKeyDown,
    suggestionData,
    activeSuggestion,
    isVisibleSuggestions,
    handleHoverSuggestion,
  } = useSuggestionInputUI({
    data,
    value,
    dataValueKey,
    suggestionCount,
    handleChangeValue,
  });

  return (
    <ContainerSC>
      <InputSC
        name=""
        type="text"
        inputMode="text"
        autoComplete="false"
        {...inputProps}
        value={inputValue}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
      <SuggestionContainerSC>
        <SuggestionWrapperSC>
          {isVisibleSuggestions &&
            suggestionData.map((suggestionItem, index) => (
              <SuggestionItemComp
                key={index}
                index={index + 1}
                activeSuggestion={activeSuggestion}
                handleHoverSuggestion={handleHoverSuggestion}
                {...suggestionItem}
              />
            ))}
        </SuggestionWrapperSC>
      </SuggestionContainerSC>
    </ContainerSC>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  InputSC: DefaultInputSC,
  SuggestionContainerSC: DefaultSuggestionContainerSC,
  SuggestionWrapperSC: DefaultSuggestionWrapperSC,
} = SuggestionInputStyleObj;

export default React.memo(SuggestionInputUI);
