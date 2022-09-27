import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CodeFieldsUI } from "UI/CodeFieldsUI/CodeFieldsUI";
import "css/global.css";

//! EXTEND InputUI
export default {
  title: "Example/CodeFieldsUI",
  component: CodeFieldsUI,
  argTypes: {
    fieldsCount: {
      description: "Количество поллей ввода",
    },
    callbackGetFinalCode: {
      description: "каллбек успешного заполнения всех полей, (code) => {}",
    },
  },
} as ComponentMeta<typeof CodeFieldsUI>;

const TemplateCodeFields: ComponentStory<typeof CodeFieldsUI> = (args) => {
  return <CodeFieldsUI {...args} />;
};
export const CodeFieldsDefault = TemplateCodeFields.bind({});

CodeFieldsDefault.args = {
  fieldsCount: 4,
  callbackGetFinalCode: (code) => {
    console.log(code);
  },
};
