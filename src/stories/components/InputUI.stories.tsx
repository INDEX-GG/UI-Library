import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputUI } from "UI/InputUI/InputUI";
import "css/global.css";
import { InputArgTypes } from "../constants/constants";
import { telephoneMask } from "../../services/services";

export default {
  title: "Example/InputUI",
  component: InputUI,
  argTypes: InputArgTypes,
} as ComponentMeta<typeof InputUI>;

const TemplateInput: ComponentStory<typeof InputUI> = (args) => (
  <InputUI {...args} />
);

const TemplateInputPhone: ComponentStory<typeof InputUI> = ({
  // eslint-disable-next-line react/prop-types
  inputProps,
  ...otherArgs
}) => {
  const [phone, setPhone] = useState<string>(
    // eslint-disable-next-line react/prop-types
    (inputProps?.value as string) || "",
  );

  return (
    <InputUI
      inputProps={{
        ...inputProps,
        value: telephoneMask(phone),
        onChange: (e) => setPhone(e.target.value),
      }}
      {...otherArgs}
    />
  );
};

export const InputDefault = TemplateInput.bind({});
export const InputPhone = TemplateInputPhone.bind({});

InputDefault.args = {
  inputProps: {
    type: "text",
    placeholder: "Поле для обратной связи",
    inputMode: "text",
    name: "default-input",
  },
};

InputPhone.args = {
  inputProps: {
    value: "88005553535",
    name: "phone",
    type: "tel",
    inputMode: "tel",
    placeholder: "phone",
  },
};
