import React from "react";
import {
  CheckboxUIStyleObj,
  DefaultCheckboxCheckboxProps,
  DefaultCheckboxPropsSC,
  DefaultCheckboxType,
  ICheckboxProps,
} from "UI/CheckboxUI/types";

export const CheckboxUI = ({
  type = DefaultCheckboxType,
  checkboxProps = DefaultCheckboxCheckboxProps,
  styledComponents = DefaultCheckboxPropsSC,
}: ICheckboxProps) => {
  const { CheckboxSC = DefaultCheckboxSC } = styledComponents;

  return <CheckboxSC {...checkboxProps} type="checkbox" checkboxType={type} />;
};

const { CheckboxSC: DefaultCheckboxSC } = CheckboxUIStyleObj;

export default React.memo(CheckboxUI);
