import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { VirtualListUI } from "UI/VirtualListUI/VirtualListUI";

//! EXTEND InputUI
export default {
  title: "Example/VirtualListUI",
  component: VirtualListUI,
  argTypes: {},
} as ComponentMeta<typeof VirtualListUI>;

const TemplateCheckboxUI: ComponentStory<typeof VirtualListUI> = () => {
  return <VirtualListUI />;
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {};
