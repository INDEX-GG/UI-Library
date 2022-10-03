import React from "react";
import {
  DefaultValidatePasswordStyleComponents,
  IValidatePasswordProps,
  ValidatePasswordStyleObj,
} from "UI/ValidatePasswordUI/types";
import { useValidatePasswordUI } from "UI/ValidatePasswordUI/useValidatePasswordUI";
import ValidatePasswordItem from "UI/ValidatePasswordUI/ValidatePasswordItem/ValidatePasswordItem";

export const ValidatePasswordUI = ({
  value,
  handleChangeValidate,
  styleComponents = DefaultValidatePasswordStyleComponents,
}: IValidatePasswordProps) => {
  //? style-component
  const { ContainerSC = DefaultContainerSC, ItemSC = DefaultItemSC } =
    styleComponents;

  //? main-logic
  const { validateRulesArr, handleChangeRulesStateArr } = useValidatePasswordUI(
    { handleChangeValidate },
  );

  return (
    <ContainerSC>
      {validateRulesArr.map((item) => (
        <ValidatePasswordItem
          key={item.id}
          ItemSC={ItemSC}
          currentValue={value}
          handleChangeRulesStateArr={handleChangeRulesStateArr}
          {...item}
        />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC: DefaultContainerSC, ItemSC: DefaultItemSC } =
  ValidatePasswordStyleObj;

export default React.memo(ValidatePasswordUI);
