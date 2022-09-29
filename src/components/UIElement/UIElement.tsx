import React, { useRef, useState } from "react";
import { InputUI } from "UI/InputUI/InputUI";
import styled from "styled-components";
import { InputUIStyledComponent } from "UI/InputUI/types";
import InputPasswordUI from "UI/InputPasswordUI/InputPasswordUI";
import Title from "../Title/Title";
import { CodeFieldsUI } from "UI/CodeFieldsUI/CodeFieldsUI";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";
import { TextAreaStylesObj } from "UI/TextAreaUI/types";
import { ButtonUI } from "UI/ButtonUI/ButtonUI";
import { ButtonUIStyleObj } from "UI/ButtonUI/types";
import ModalUI from "UI/ModalUI/ModalUI";
import { ModalStyleObj } from "UI/ModalUI/types";
import SkeletonUI from "UI/SkeletonUI/SkeletonUI";
import { SkeletonStyleObj } from "UI/SkeletonUI/types";
import AvatarUI from "UI/AvatarUI/AvatarUI";
import { AvatarStyleObj } from "UI/AvatarUI/types";

const UIElement = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <Title>Custom Text Area</Title>
      <TextAreaUI
        isAutoHeight={true}
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
      <Title>Custom Button + Custom Modal</Title>
      <ButtonUI
        isAutoWidth={false}
        buttonProps={{
          onClick: () => setIsOpen(true),
        }}
        styledComponents={{ ButtonSC: CustomButtonSC }}>
        Открыть модальное окно
      </ButtonUI>
      <ModalUI
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        styleComponents={{
          BackdoorSC: CustomBackdoorSC,
          CloseButtonSC: CustomCloseButtonSC,
        }}>
        <h1>Custom Modal</h1>
      </ModalUI>
      <Title>Skeleton Custom</Title>
      <div style={{ width: "100px", height: "100px" }}>
        <SkeletonUI
          borderRadius="10px"
          styleComponents={{
            SkeletonSC: CustomSkeletonSC,
            SkeletonItemSC: CustomSkeletonItemSC,
          }}
        />
      </div>
      <Title>Custom Avatar</Title>
      <AvatarUI
        id={1}
        name="Rodion"
        surname="Pyatigorskiy"
        size="large"
        isAvatarHref={false}
        styleComponents={{ WrapperSC: CustomAvatarWrapperSC }}
      />
      <Title>Accordion</Title>
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

const { ButtonSC } = ButtonUIStyleObj;

const CustomButtonSC = styled(ButtonSC)`
  height: 40px;
  border-radius: 5px;
`;

const { BackdoorSC, CloseButtonSC } = ModalStyleObj;
const CustomBackdoorSC = styled(BackdoorSC)`
  background-color: rgba(0, 99, 164, 0.4);
`;
const CustomCloseButtonSC = styled(CloseButtonSC)`
  background-color: red;
`;

const { SkeletonSC, SkeletonItemSC } = SkeletonStyleObj;

const CustomSkeletonSC = styled(SkeletonSC)`
  background-color: green;
`;
const CustomSkeletonItemSC = styled(SkeletonItemSC)`
  background-color: lightgreen;
  border-radius: 50%;
  height: 50px;
`;

const { WrapperSC: AvatarWrapperSC } = AvatarStyleObj;
const CustomAvatarWrapperSC = styled(AvatarWrapperSC)`
  background-color: yellowgreen;
`;

export default React.memo(UIElement);
