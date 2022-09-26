import { ForwardedRef, KeyboardEvent, RefObject } from "react";
import { IInputCodeProps } from "UI/CodeFieldsUI/types";

export const useInputCode = (
  { id, handleChangeCodeArr }: IInputCodeProps,
  refContainer: ForwardedRef<HTMLDivElement>,
) => {
  const handleSetStateValue = (state: string) => {
    handleChangeCodeArr(state, id - 1);
  };

  const getInputDOM = () => {
    const refObj = refContainer as RefObject<HTMLDivElement>;
    const childrenInputsArr = refObj.current?.children;
    if (childrenInputsArr?.length) {
      const currentRef = childrenInputsArr[id - 1] as HTMLInputElement;
      const prevCurrentRef = childrenInputsArr[id - 2] as HTMLInputElement;
      const nexCurrentRef = childrenInputsArr[id] as HTMLInputElement;
      return {
        currentRef,
        prevCurrentRef,
        nexCurrentRef,
      };
    }
    return {
      currentRef: null,
      prevCurrentRef: null,
      nexCurrentRef: null,
    };
  };

  const handleChangeFocusInput = (
    direction: "next" | "prev",
    navigation: "keyboard" | "value",
  ) => {
    const { prevCurrentRef, nexCurrentRef } = getInputDOM();
    let inputFocus = null;

    if (direction === "next" && nexCurrentRef) {
      inputFocus = nexCurrentRef as HTMLInputElement;
    }
    if (direction === "prev" && prevCurrentRef) {
      inputFocus = prevCurrentRef as HTMLInputElement;
    }
    if (inputFocus) {
      if (navigation === "value") {
        inputFocus.focus();
        return;
      }
      inputFocus.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleSetStateValue(e.key);
        handleChangeFocusInput("next", "value");
        return;
      case "ArrowRight":
        handleChangeFocusInput("next", "keyboard");
        return;
      case "ArrowLeft":
        handleChangeFocusInput("prev", "keyboard");
        return;
      case "Backspace":
        handleSetStateValue("");
        setTimeout(() => handleChangeFocusInput("prev", "value"), 4);
        return;
      default:
        break;
    }
  };

  return {
    handleKeyDown,
  };
};
