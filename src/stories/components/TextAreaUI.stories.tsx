import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";

//! EXTEND InputUI
export default {
  title: "Example/TextAreaUI",
  component: TextAreaUI,
} as ComponentMeta<typeof TextAreaUI>;

const TemplateTextAreaUI: ComponentStory<typeof TextAreaUI> = (args) => {
  return <TextAreaUI />;
};
export const Default = TemplateTextAreaUI.bind({});

Default.args = {};
