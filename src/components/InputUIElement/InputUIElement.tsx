import React, { useRef, useState } from "react";
import { InputUI } from "UI/InputUI/InputUI";
import styled from "styled-components";
import { InputUIStyledComponent } from "UI/InputUI/types";
import InputPasswordUI from "UI/InputPasswordUI/InputPasswordUI";
import Title from "../Title/Title";
import { ButtonUI } from "UI/ButtonUI/ButtonUI";

const InputUIElement = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
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

export default React.memo(InputUIElement);
