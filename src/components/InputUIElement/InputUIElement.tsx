import React, { useEffect, useRef, useState } from "react";
import { InputUI } from "UI/InputUI/InputUI";
import styled from "styled-components";
import { InputUIStyledComponent } from "UI/InputUI/types";
import InputPasswordUI from "UI/InputPasswordUI/InputPasswordUI";
import Title from "../Title/Title";
import { CodeFieldsUI } from "UI/CodeFieldsUI/CodeFieldsUI";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";
import { TextAreaStylesObj } from "UI/TextAreaUI/types";

const InputUIElement = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form>
      <Title>Custom Input</Title>
      <InputUI
        ref={ref}
        inputProps={{
          value,
          type: "text",
          inputMode: "text",
          name: "custom-input",
          placeholder: "controller custom input",
          onChange: (e) => setValue(e.target.value),
        }}
        error={{
          isError: false,
          isErrorDOM: true,
          errorMessage: "Error",
        }}
        styledComponents={{
          InputSC: CustomInputSC,
        }}
      />
      <Title>InputPasswordUI</Title>
      <InputPasswordUI
        inputProps={{
          value: password,
          onChange: (e) => setPassword(e.target.value),
        }}
      />
      <Title>Input Number</Title>
      <InputUI
        inputProps={{
          type: "number",
          name: "number",
          inputMode: "numeric",
        }}
      />
      <Title>Code Input</Title>
      <CodeFieldsUI
        fieldsCount={4}
        callbackGetFinalCode={(code) => console.log(code)}
      />
      <Title>Text Area</Title>
      <TextAreaUI
        isAutoHeight={false}
        error={{ isError: true, errorMessage: "123" }}
        textAreaProps={{
          value: textArea,
          placeholder: "AutoSize",
          onChange: (e) => setTextArea(e.target.value),
        }}
        styledComponents={{
          TextAreaSC: TextAreaCustomSC,
          ErrorMessageSC: TextAreaCustomErrorSC,
        }}
      />
    </form>
  );
};

const { InputSC } = InputUIStyledComponent;
const CustomInputSC = styled(InputSC)`
  color: orange;
  border-color: orange;
  &::placeholder {
    color: orange;
  }
`;

const { TextAreaSC, ErrorMessageSC } = TextAreaStylesObj;

const TextAreaCustomSC = styled(TextAreaSC)`
  background-color: lightblue;
`;

const TextAreaCustomErrorSC = styled(ErrorMessageSC)`
  color: orange;
`;

export default React.memo(InputUIElement);
