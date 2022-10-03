import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { DropdownUI } from "UI/DropdownUI/DropdownUI";

//! EXTEND InputUI
export default {
  title: "Example/DropdownUI",
  component: DropdownUI,
  argTypes: {},
} as ComponentMeta<typeof DropdownUI>;

const TemplateCheckboxUI: ComponentStory<typeof DropdownUI> = (args) => {
  return <DropdownUI />;
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {};
