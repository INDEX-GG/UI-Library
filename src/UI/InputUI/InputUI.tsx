import React from "react";
import { useInputUIStyles } from "./style";
import { IInputUIProps } from "./types";

export const InputUI = ({ inputProps }: IInputUIProps) => {
  return (
    <>
      <InputUISC {...inputProps} placeholder="ewq" />
    </>
  );
};

const { InputUISC } = useInputUIStyles();
