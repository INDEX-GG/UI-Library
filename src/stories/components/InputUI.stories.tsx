import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputUI } from "UI/InputUI/InputUI";
import "css/global.css";
import { InputArgTypes } from "../constants/constants";

export default {
  title: "Example/InputUI",
  component: InputUI,
  argTypes: InputArgTypes,
} as ComponentMeta<typeof InputUI>;

const TemplateInput: ComponentStory<typeof InputUI> = (args) => (
  <InputUI {...args} />
);
export const InputDefault = TemplateInput.bind({});

InputDefault.args = {
  inputProps: { placeholder: "text" },
};
