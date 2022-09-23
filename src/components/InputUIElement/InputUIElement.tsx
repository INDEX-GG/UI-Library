import React, { useRef } from "react";
import { InputUI } from "UI/InputUI/InputUI";
import styled from "styled-components";
import { InputUIStyledComponent } from "UI/InputUI/types";

const InputUIElement = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <InputUI
        ref={ref}
        error={{
          isError: false,
          isErrorDOM: true,
          errorMessage:
            "Это очень длинный текс с ошибкой для переноса, что может быть хуже чем на столько длинная ошибка? :( который не заставляем верстку прыгать",
        }}
        styledComponents={{ InputSC: CustomInputSC }}
      />
      <h1>ok</h1>
    </>
  );
};

const { InputSC } = InputUIStyledComponent;
const CustomInputSC = styled(InputSC)``;

export default React.memo(InputUIElement);
