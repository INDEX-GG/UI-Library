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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenAccordion, setIsOpenAccordion] = useState<boolean>(false);
  const [isOpenAccordion2, setIsOpenAccordion2] = useState<boolean>(false);
  const [isOpenAccordion2Inner, setIsOpenAccordion2Inner] =
    useState<boolean>(false);
  const [isOpenAccordion3Inner, setIsOpenAccordion3Inner] =
    useState<boolean>(false);
  const [isOpenAccordion4Inner, setIsOpenAccordion4Inner] =
    useState<boolean>(false);
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
        <p style={{ fontSize: "42px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          amet at atque ea quasi qui quia quidem quod rem totam ut vitae
          voluptatibus? Deleniti deserunt dolore doloribus nihil quo? Minus!
        </p>
      </AccordionUI>
      <AccordionUI
        isOpen={isOpenAccordion2}
        handleChange={() => setIsOpenAccordion2((prevState) => !prevState)}
        HeaderComponent={() => <h1>accordion 2</h1>}>
        <p style={{ fontSize: "36px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          amet at atque ea quasi qui quia quidem quod rem totam ut vitae
          voluptatibus? Deleniti deserunt dolore doloribus nihil quo? Minus!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          deleniti deserunt, dolor dolorem enim illo, inventore odio quae
          repellendus sapiente soluta, voluptas. Dolores doloribus eveniet illo
          modi mollitia! Cupiditate, vitae! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Adipisci aperiam assumenda consequuntur
          distinctio enim facere ipsum laborum libero modi molestias nemo non
          nulla odio officiis perferendis, quam ratione reprehenderit ullam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut
          cumque deserunt dolore, dolorum sed ullam ut? Beatae dolor eius
          eveniet maiores obcaecati perferendis quibusdam quod quos vero
          voluptates, voluptatibus! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ad adipisci aliquam animi commodi deserunt
          distinctio dolores esse excepturi explicabo facere, laudantium minima
          modi nobis placeat recusandae tenetur veritatis! Praesentium,
          veritatis.
        </p>
        <AccordionUI
          isOpen={isOpenAccordion2Inner}
          handleChange={() =>
            setIsOpenAccordion2Inner((prevState) => !prevState)
          }
          HeaderComponent={() => <h1>accordion 2 inner</h1>}>
          <p>
            Inner Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate dolor dolore itaque quisquam similique suscipit,
            voluptates. Aliquid aperiam deserunt dignissimos eius eum hic illum
            ipsam maiores mollitia, quisquam velit, voluptas! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Commodi deserunt dicta
            dolores eius ipsum magni minima mollitia nobis perferendis quae,
            quia quis repudiandae sit unde voluptate! Asperiores nemo sunt
            velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi cupiditate ea enim esse eveniet expedita, harum libero magni,
            natus pariatur perspiciatis provident quia repellendus reprehenderit
            sit tenetur, voluptatibus! Exercitationem, sed! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Aliquam, laborum quasi!
            Accusantium delectus esse odit qui soluta? Ad dolor dolore fugit
            molestias nulla omnis repudiandae sunt tempore unde velit.
            Similique.
          </p>
        </AccordionUI>
        <h1>ok</h1>
        <h1>ok</h1>
        <AccordionUI
          isOpen={isOpenAccordion3Inner}
          handleChange={() =>
            setIsOpenAccordion3Inner((prevState) => !prevState)
          }
          HeaderComponent={() => <h1>accordion 3 inner</h1>}>
          <p>
            Inner Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate dolor dolore itaque quisquam similique suscipit,
            voluptates. Aliquid aperiam deserunt dignissimos eius eum hic illum
            ipsam maiores mollitia, quisquam velit, voluptas! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Commodi deserunt dicta
            dolores eius ipsum magni minima mollitia nobis perferendis quae,
            quia quis repudiandae sit unde voluptate! Asperiores nemo sunt
            velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi cupiditate ea enim esse eveniet expedita, harum libero magni,
            natus pariatur perspiciatis provident quia repellendus reprehenderit
            sit tenetur, voluptatibus! Exercitationem, sed! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Aliquam, laborum quasi!
            Accusantium delectus esse odit qui soluta? Ad dolor dolore fugit
            molestias nulla omnis repudiandae sunt tempore unde velit.
            Similique.
          </p>
          <AccordionUI
            isOpen={isOpenAccordion4Inner}
            handleChange={() =>
              setIsOpenAccordion4Inner((prevState) => !prevState)
            }
            HeaderComponent={() => <h1>accordion 1 inner inner</h1>}>
            <p>
              Inner Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate dolor dolore itaque quisquam similique suscipit,
              voluptates. Aliquid aperiam deserunt dignissimos eius eum hic
              illum ipsam maiores mollitia, quisquam velit, voluptas! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              deserunt dicta dolores eius ipsum magni minima mollitia nobis
              perferendis quae, quia quis repudiandae sit unde voluptate!
              Asperiores nemo sunt velit. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Animi cupiditate ea enim esse
              eveniet expedita, harum libero magni, natus pariatur perspiciatis
              provident quia repellendus reprehenderit sit tenetur,
              voluptatibus! Exercitationem, sed! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquam, laborum quasi! Accusantium
              delectus esse odit qui soluta? Ad dolor dolore fugit molestias
              nulla omnis repudiandae sunt tempore unde velit. Similique.
            </p>
          </AccordionUI>
        </AccordionUI>
      </AccordionUI>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
      <h1>bad</h1>
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
