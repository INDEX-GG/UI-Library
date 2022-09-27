import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";

//! EXTEND InputUI
export default {
  title: "Example/TextAreaUI",
  component: TextAreaUI,
  argTypes: {
    isAutoHeight: {
      description: "длинна по контенту (не работает в storybook)",
    },
    styledComponents: {
      description: "изменение дефолтных стилей",
    },
  },
} as ComponentMeta<typeof TextAreaUI>;

const TemplateTextAreaUI: ComponentStory<typeof TextAreaUI> = (args) => {
  return <TextAreaUI {...args} />;
};
export const Default = TemplateTextAreaUI.bind({});

Default.args = {
  isAutoHeight: true,
  textAreaProps: {
    placeholder: "TextArea Placeholder",
  },
};
