import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { AccordionUI } from "UI/AccordionUI/AccordionUI";
import GithubLink from "../../components/GithubLink/GithubLink";

//! EXTEND InputUI
export default {
  title: "Example/AccordionUI",
  component: AccordionUI,
  argTypes: {
    isOpen: {
      description: "открытый / закрытый",
    },
    handleChange: {
      description: "setState isOpen",
    },
    HeaderComponent: {
      description: "Компонент (FC) шапки",
    },
    children: {
      description: "контент внутри",
    },
    duration: {
      description: "transition css",
    },
    styleComponents: {
      description: "изменение дефолтных стили",
    },
  },
} as ComponentMeta<typeof AccordionUI>;

const TemplateCheckboxUI: ComponentStory<typeof AccordionUI> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  ...otherArgs
}) => {
  const [isInnerOpen, setIsInnerOpen] = useState<boolean>(isOpen);

  const handleChangeOpen = () => {
    setIsInnerOpen((prevState) => !prevState);
  };

  return (
    <>
      <GithubLink componentName="AccordionUI" />
      <AccordionUI
        isOpen={isInnerOpen}
        {...otherArgs}
        handleChange={handleChangeOpen}>
        {otherArgs.children}
      </AccordionUI>
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  isOpen: false,
  handleChange: () => console.log("change state"),
  HeaderComponent: () => <h1>header</h1>,
  children: (
    <>
      <h1>Children</h1>
    </>
  ),
};
