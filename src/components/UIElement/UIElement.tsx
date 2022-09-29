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
import AccordionUI from "UI/AccordionUI/AccordionUI";

const UIElement = () => {
  const [value, setValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenAccordion, setIsOpenAccordion] = useState<boolean>(false);
  const [isOpenAccordion2, setIsOpenAccordion2] = useState<boolean>(false);

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
      <AccordionUI
        isOpen={isOpenAccordion}
        handleChange={() => setIsOpenAccordion((prevState) => !prevState)}
        HeaderComponent={() => <h1>accordion 1</h1>}>
        <div style={{ padding: "120px 0" }}>
          <h1>ok</h1>
          <h1>ok</h1>
          <h1>ok</h1>
          <h1>ok</h1>
          <h1>ok</h1>
          <h1>ok</h1>
          <h1>ok</h1>
          <h1>ok</h1>
        </div>
      </AccordionUI>
      <AccordionUI
        isOpen={isOpenAccordion2}
        handleChange={() => setIsOpenAccordion2((prevState) => !prevState)}
        HeaderComponent={() => <h1>accordion 2</h1>}>
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequuntur ex expedita illo, illum in iusto nam necessitatibus
          possimus quisquam, sequi similique suscipit, vero. Commodi deleniti
          expedita labore nisi porro?
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            accusantium doloribus incidunt iure molestiae nobis optio quos
            ratione tempore unde. Consequuntur cumque eius eos fuga iure,
            nostrum quo repellendus voluptatibus?
          </div>
          <div>
            Accusamus animi architecto aspernatur cum distinctio ea ex neque
            quas tenetur vitae. Architecto aspernatur, doloremque doloribus
            error et eveniet inventore quibusdam voluptatibus. Ab consequuntur
            fugit ipsa maiores rem repudiandae vero!
          </div>
          <div>
            Adipisci aperiam, cumque delectus ea eaque eligendi eos fuga maxime
            nostrum odio perferendis quae reiciendis sequi tenetur, voluptatum?
            Aspernatur consequuntur dicta eaque nam nobis non quidem quod
            suscipit. Iure, mollitia.
          </div>
          <div>
            Alias consequuntur doloribus fuga fugit id ipsum itaque magni
            necessitatibus, porro quaerat quas quia quisquam sed similique
            soluta suscipit tempore. Atque aut deserunt hic incidunt molestiae
            perspiciatis placeat veritatis voluptates!
          </div>
          <div>
            Aliquam aliquid atque blanditiis delectus dicta, dignissimos dolore
            dolorem eius eos expedita harum iste, labore molestiae nostrum
            obcaecati porro, quasi quis quod rem sequi sunt totam ut.
            Accusantium, debitis enim!
          </div>
        </>
      </AccordionUI>
      <h1>bad</h1>
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
