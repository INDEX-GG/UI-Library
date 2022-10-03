import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { TextAreaUI } from "UI/TextAreaUI/TextAreaUI";
import { useArgs } from "@storybook/client-api";

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
  const [{ value }, changeArgs] = useArgs();

  return (
    <TextAreaUI
      {...args}
      textAreaProps={{
        ...args.textAreaProps,
        value: value,
        onChange: (e) => changeArgs({ value: e.target.value }),
      }}
    />
  );
};
export const Default = TemplateTextAreaUI.bind({});

Default.args = {
  isAutoHeight: true,
  textAreaProps: {
    placeholder: "TextArea Placeholder",
    value: "",
  },
};
