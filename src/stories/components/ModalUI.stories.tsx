import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { ModalUI } from "UI/ModalUI/ModalUI";
import { ButtonUI } from "UI/ButtonUI/ButtonUI";
import GithubLink from "../../components/GithubLink/GithubLink";

//! EXTEND InputUI
export default {
  title: "Example/ModalUI",
  component: ModalUI,
  argTypes: {
    isOpen: {
      description: "показать / скрыть модальное окно",
    },
    handleClose: {
      description: "функция закрытия модального окна",
    },
    type: {
      description: "вид модального окна",
    },
    portalObj: {
      description: "Объект портала",
    },
    typeCloseButton: {
      description: "тип закртыия модального окна",
    },
    isAnimationEffect: {
      description: "Анимация открытия",
    },
    styleComponents: {
      description: "изменение дефолтных стилей",
    },
  },
} as ComponentMeta<typeof ModalUI>;

const TemplateCheckboxUI: ComponentStory<typeof ModalUI> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  ...otherArgs
}) => {
  const [customIsOpen, setCustomIsOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    setCustomIsOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <GithubLink componentName="ModalUI" />
      <ButtonUI
        isAutoWidth={true}
        buttonProps={{ onClick: () => setCustomIsOpen(true) }}>
        Открыть модальное окно
      </ButtonUI>
      <ModalUI
        isOpen={customIsOpen}
        {...otherArgs}
        handleClose={() => setCustomIsOpen(false)}>
        Modal
      </ModalUI>
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  isOpen: false,
  handleClose: () => {
    console.log("handleClose");
  },
  portalObj: { isPortal: false },
};
