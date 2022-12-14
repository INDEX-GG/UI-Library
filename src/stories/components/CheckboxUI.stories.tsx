import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { CheckboxUI } from "UI/CheckboxUI/CheckboxUI";
import GithubLink from "../../components/GithubLink/GithubLink";

//! EXTEND InputUI
export default {
  title: "Example/CheckboxUI",
  component: CheckboxUI,
} as ComponentMeta<typeof CheckboxUI>;

const TemplateCheckboxUI: ComponentStory<typeof CheckboxUI> = (args) => {
  return (
    <>
      <GithubLink componentName="CheckboxUI" />
      <CheckboxUI {...args} />
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});
export const Toggle = TemplateCheckboxUI.bind({});

Default.args = {};

Toggle.args = {
  type: "toggle",
};
