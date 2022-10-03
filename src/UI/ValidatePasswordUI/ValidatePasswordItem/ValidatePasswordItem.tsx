import React, { useMemo } from "react";
import {
  IValidatePasswordProps,
  ValidateRulesItem,
} from "UI/ValidatePasswordUI/types";

type StyleComponent = Required<Pick<IValidatePasswordProps, "styleComponents">>;
type ValidateItemSCType = Required<
  Pick<StyleComponent["styleComponents"], "ItemSC">
>;

type IValidatePasswordItemProps = ValidateRulesItem &
  ValidateItemSCType & {
    currentValue: string;
    handleChangeRulesStateArr: (id: number, state: boolean) => void;
  };

const ValidatePasswordItem = ({
  id,
  title,
  regExp,
  checkFunction,
  currentValue,
  handleChangeRulesStateArr,
  ItemSC,
}: IValidatePasswordItemProps) => {
  const isActive = useMemo(() => {
    let booleanValue = false;
    // regExp
    if (regExp) {
      booleanValue = !!currentValue.match(regExp);
    }
    // checkFunction
    if (checkFunction) {
      booleanValue = checkFunction(currentValue);
    }
    // changeState
    handleChangeRulesStateArr(id, booleanValue);
    return booleanValue;
  }, [currentValue]);

  return <ItemSC isActive={isActive}>{title}</ItemSC>;
};

export default React.memo(ValidatePasswordItem);
