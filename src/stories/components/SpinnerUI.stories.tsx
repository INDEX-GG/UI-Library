import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { SpinnerUI } from "UI/SpinnerUI/SpinnerUI";
import GithubLink from "../../components/GithubLink/GithubLink";

//! EXTEND InputUI
export default {
  title: "Example/SpinnerUI",
  component: SpinnerUI,
  argTypes: {
    size: {
      description: "размер",
    },
  },
} as ComponentMeta<typeof SpinnerUI>;

const TemplateCheckboxUI: ComponentStory<typeof SpinnerUI> = (args) => {
  return (
    <>
      <GithubLink componentName="SpinnerUI" />
      <SpinnerUI {...args} />
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  size: 80,
};
