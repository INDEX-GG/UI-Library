import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "css/global.css";
import { SuggestionInputUI } from "UI/SuggestionInputUI/SuggestionInputUI";
import SuggestionItem from "UI/SuggestionInputUI/SuggestionItem/SuggestionItem";
import SuggestionController from "UI/SuggestionInputUI/SuggestionController/SuggestionController";

//! EXTEND InputUI
export default {
  title: "Example/SuggestionInputUI",
  component: SuggestionInputUI,
  argTypes: {
    size: {
      description: "размер",
    },
  },
} as ComponentMeta<typeof SuggestionInputUI>;

const TemplateCheckboxUI: ComponentStory<typeof SuggestionInputUI> = (args) => {
  return <SuggestionController />;
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  data: [
    { text: "First" },
    { text: "Second" },
    { text: "Before" },
    { text: "After" },
  ],
  SuggestionItemComp: SuggestionItem,
  inputProps: {
    placeholder: "Поиск",
  },
};
