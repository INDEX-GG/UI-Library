import {
  useState,
  KeyboardEvent,
  ChangeEvent,
  useEffect,
  useMemo,
} from "react";
import { ISuggestionInputProps } from "UI/SuggestionInputUI/types";

type ReqInputProps = Required<Pick<ISuggestionInputProps, "inputProps">>;
type ReqInputValue = Partial<Pick<ReqInputProps["inputProps"], "value">>;

type UseSuggestionInput = Required<
  Omit<
    ISuggestionInputProps,
    "styleComponents" | "inputProps" | "SuggestionItemComp"
  > &
    ReqInputValue
>;

export const useSuggestionInputUI = ({
  data,
  value,
  dataValueKey,
  suggestionCount,
  handleChangeValue,
}: UseSuggestionInput) => {
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [isVisibleSuggestions, setIsVisibleSuggestions] =
    useState<boolean>(false);

  const suggestionData = useMemo(() => {
    if (data.length) {
      return data.slice(0, suggestionCount);
    }
    return [];
  }, [data, suggestionCount]);

  const inputValue = useMemo(() => {
    if (activeSuggestion == 0) {
      return value;
    }
    return data[activeSuggestion - 1][dataValueKey];
  }, [value, activeSuggestion]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setActiveSuggestion(0);
    handleChangeValue(value);
  };

  const handleHoverSuggestion = (state: number) => {
    return () => {
      setActiveSuggestion(state);
    };
  };

  const handleChangeActiveSuggestion = (state: number) => {
    setActiveSuggestion((prevState) => {
      const newState = prevState + state;
      if (newState > suggestionCount) {
        return 0;
      }
      if (newState < 0) {
        return suggestionCount;
      }
      return newState;
    });
  };

  const handleFocus = () => {
    setIsVisibleSuggestions(true);
  };

  const handleBlur = () => {
    setIsVisibleSuggestions(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Escape":
        setIsVisibleSuggestions(false);
        break;
      case "ArrowUp":
        handleChangeActiveSuggestion(-1);
        break;
      case "ArrowDown":
        handleChangeActiveSuggestion(1);
        break;
    }
  };

  useEffect(() => {
    if (value) {
      setIsVisibleSuggestions(true);
    }
  }, [value]);

  return {
    onChange,
    inputValue,
    handleBlur,
    handleFocus,
    handleKeyDown,
    suggestionData,
    activeSuggestion,
    isVisibleSuggestions,
    handleHoverSuggestion,
  };
};
