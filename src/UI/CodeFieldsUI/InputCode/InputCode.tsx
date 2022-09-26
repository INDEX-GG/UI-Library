import React, { forwardRef } from "react";
import { CodeFieldsUIStylesObj, IInputCodeProps } from "UI/CodeFieldsUI/types";
import { useInputCode } from "UI/CodeFieldsUI/InputCode/useInputCode";

const InputCode = forwardRef<HTMLDivElement, IInputCodeProps>(
  (props, refContainer) => {
    const { id, value } = props;
    const { handleKeyDown } = useInputCode(props, refContainer);
    return (
      <InputSC
        id={`inputCode-${id}`}
        type="string"
        value={value}
        inputMode="numeric"
        onKeyDown={handleKeyDown}
      />
    );
  },
);

InputCode.displayName = "InputCode";
const { InputSC } = CodeFieldsUIStylesObj;

export default React.memo(InputCode);
