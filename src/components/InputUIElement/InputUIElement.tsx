import React, { useRef, useState } from "react";
import { InputUI } from "UI/InputUI/InputUI";
import styled from "styled-components";
import { InputUIStyledComponent } from "UI/InputUI/types";
import InputPasswordUI from "UI/InputPasswordUI/InputPasswordUI";

const InputUIElement = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <InputUI
        ref={ref}
        inputProps={{
          value,
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
      <InputPasswordUI
        inputProps={{
          value: password,
          onChange: (e) => setPassword(e.target.value),
        }}
      />
    </>
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
