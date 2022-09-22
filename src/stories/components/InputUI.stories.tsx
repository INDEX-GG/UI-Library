import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputUI } from "../../UI/InputUI/InputUI";

export default {
  title: "Example/InputUI",
  component: InputUI,
  argTypes: {
    inputProps: { defaultValue: "123" },
  },
} as ComponentMeta<typeof InputUI>;

const Template: ComponentStory<typeof InputUI> = (args) => <InputUI {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  inputProps: {},
};
