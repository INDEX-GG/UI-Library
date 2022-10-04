import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { DrawerUI } from "UI/DrawerUI/DrawerUI";
import { useArgs } from "@storybook/client-api";
import GithubLink from "../../components/GithubLink/GithubLink";

//! EXTEND InputUI
export default {
  title: "Example/DrawerUI",
  component: DrawerUI,
  argTypes: {
    isOpen: {
      description: "открытие / закрытие",
    },
    handleClose: {
      description: "функция закрытия ",
    },
    portalName: {
      description: "имя контейнера портала",
    },
    animationTiming: {
      description: "время анимации",
    },
    direction: {
      description: "направление drawer",
    },
    styleComponents: {
      description: "дефолтные стили",
    },
  },
} as ComponentMeta<typeof DrawerUI>;

const TemplateCheckboxUI: ComponentStory<typeof DrawerUI> = (args) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const handleChange = () => updateArgs({ isOpen: !isOpen });

  return (
    <>
      <GithubLink componentName="DrawerUI" />

      <button onClick={handleChange}>open drawer</button>
      <DrawerUI {...args} handleClose={handleChange}>
        <div>DrawerChildren</div>
        <div>DrawerChildren</div>
        <div>DrawerChildren</div>
        <div>DrawerChildren</div>
        <div>DrawerChildren</div>
        <div>DrawerChildren</div>
      </DrawerUI>
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  isOpen: false,
  handleClose: () => {
    console.log("change state");
  },
  portalName: "",
};
