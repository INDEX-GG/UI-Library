import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputUI } from "UI/InputUI/InputUI";
import "css/global.css";

export default {
  title: "Example/InputUI",
  component: InputUI,
  argTypes: {
    error: {
      description: "Объект ошибки",
    },
    iconObj: {
      description: "Объект иконки",
    },
    inputProps: {
      description: "дефолтные аргументы input",
    },
    styledComponents: {
      description: "изменение дефолтных стилей наследование стиливого объекта",
    },
  },
} as ComponentMeta<typeof InputUI>;

const Template: ComponentStory<typeof InputUI> = (args) => <InputUI {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputProps: { placeholder: "text" },
};
