import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { ButtonUI } from "UI/ButtonUI/ButtonUI";
import MessageIcon from "../../assets/icon/MessageIcon";

//! EXTEND InputUI
export default {
  title: "Example/ButtonUI",
  component: ButtonUI,
  argTypes: {
    isAutoWidth: {
      description: "width: 100%; height: 100%",
    },
    iconObj: {
      description: "иконка в кнопке",
    },
    styledComponents: {
      description: "кастомные стили",
    },
  },
} as ComponentMeta<typeof ButtonUI>;

const TemplateCheckboxUI: ComponentStory<typeof ButtonUI> = (args) => {
  return <ButtonUI {...args}>Кнопка</ButtonUI>;
};
export const Default = TemplateCheckboxUI.bind({});
export const Disabled = TemplateCheckboxUI.bind({});
export const Icon = TemplateCheckboxUI.bind({});

Default.args = {
  isAutoWidth: false,
};

Disabled.args = {
  buttonProps: {
    disabled: true,
  },
};

Icon.args = {
  iconObj: { Icon: MessageIcon, position: "left" },
  isAutoWidth: false,
};
