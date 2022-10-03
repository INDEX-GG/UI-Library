import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ValidatePasswordUI } from "UI/ValidatePasswordUI/ValidatePasswordUI";
import "css/global.css";

//! EXTEND InputUI
export default {
  title: "Example/ValidatePasswordUI",
  component: ValidatePasswordUI,
  argTypes: {
    value: {},
    handleChangeValidate: {
      description:
        "callback функция возвращающая актульно булевое значение валидации всех правил",
    },
  },
} as ComponentMeta<typeof ValidatePasswordUI>;

const TemplateCheckboxUI: ComponentStory<typeof ValidatePasswordUI> = (
  args,
) => {
  const [isValidate, setIsValidate] = useState<boolean>(false);

  const handleChangeValidate = (state: boolean) => {
    setIsValidate(state);
  };

  return (
    <>
      <h1>Validate rules status: {`${isValidate}`}</h1>
      <br />
      <ValidatePasswordUI
        {...args}
        handleChangeValidate={handleChangeValidate}
      />
    </>
  );
};
export const Default = TemplateCheckboxUI.bind({});

Default.args = {
  value: "Test",
  handleChangeValidate: (state) => {
    console.log(`validate ${state}`);
  },
};
