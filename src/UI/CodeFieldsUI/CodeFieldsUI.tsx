import React from "react";
import {
  CodeFieldsUIStylesObj,
  ICodeFieldsUIProps,
} from "UI/CodeFieldsUI/types";
import { useCodeFieldsUI } from "UI/CodeFieldsUI/useCodeFieldsUI";
import InputCode from "UI/CodeFieldsUI/InputCode/InputCode";

export const CodeFieldsUI = ({
  // styleComponents,
  ...otherProps
}: ICodeFieldsUIProps) => {
  const { refContainer, codeArrayValue, fieldCountArray, handleChangeCodeArr } =
    useCodeFieldsUI(otherProps);

  return (
    <InputContainerSC ref={refContainer}>
      {(fieldCountArray as { id: number }[]).map((itemCount, index) => (
        <InputCode
          id={index + 1}
          key={itemCount.id}
          ref={refContainer}
          value={codeArrayValue[index]}
          handleChangeCodeArr={handleChangeCodeArr}
        />
      ))}
    </InputContainerSC>
  );
};

const { InputContainerSC } = CodeFieldsUIStylesObj;

export default React.memo(CodeFieldsUI);
