import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { SkeletonUI } from "UI/SkeletonUI/SkeletonUI";

//! EXTEND InputUI
export default {
  title: "Example/SkeletonUI",
  component: SkeletonUI,
  argTypes: {
    borderRadius: {
      description: "скругление контейнера",
    },
    styleComponents: {
      description: "изменение дефолтных стилей",
    },
  },
} as ComponentMeta<typeof SkeletonUI>;

const TemplateCheckboxUI: ComponentStory<typeof SkeletonUI> = (args) => {
  return (
    <div style={{ height: "30px" }}>
      <SkeletonUI {...args} />
    </div>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  borderRadius: "10px",
};
