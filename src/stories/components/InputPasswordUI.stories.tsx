import React, { ChangeEvent, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputPasswordUI } from "UI/InputPasswordUI/InputPasswordUI";
import "css/global.css";
import { InputArgTypes } from "../constants/constants";
import Title from "../../components/Title/Title";

//! EXTEND InputUI
export default {
  title: "Example/InputPasswordUI",
  component: InputPasswordUI,
  argTypes: InputArgTypes,
} as ComponentMeta<typeof InputPasswordUI>;

const TemplateInputPassword: ComponentStory<typeof InputPasswordUI> = ({
  // eslint-disable-next-line react/prop-types
  inputProps,
  ...otherArgs
}) => {
  const [password, setPassword] = useState<string>(
    // eslint-disable-next-line react/prop-types
    (inputProps?.value as string) || "",
  );

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Title href="/?path=/story/example-inputui--input-default">
        Extend INPUT UI
      </Title>
      <InputPasswordUI
        inputProps={{
          value: password,
          onChange: handleChangePassword,
        }}
        {...otherArgs}
      />
    </>
  );
};
export const InputDefault = TemplateInputPassword.bind({});

InputDefault.args = {
  inputProps: {
    value: "qwe123",
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
};
