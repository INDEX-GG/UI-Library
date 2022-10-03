import {
  IValidatePasswordProps,
  ValidateRulesItem,
} from "UI/ValidatePasswordUI/types";
import { useEffect, useState } from "react";

const checkFunction4 = (value: string) => {
  return value.includes("!");
};

const validateRulesArr: ValidateRulesItem[] = [
  { id: 1, title: "От 8 до 20 символов - (regExp)", regExp: /^.{8,20}$/ },
  {
    id: 2,
    title: "Только корректные символы - (regExp)",
    regExp: /^[a-zA-Z0-9!]+$/,
  },
  { id: 3, title: "Как минимум одна цифра - (regExp)", regExp: /\d+/ },
  {
    id: 4,
    title: "Поиск спецсимвола: '!' - (checkFunction)",
    checkFunction: checkFunction4,
  },
];

type UseValidatePasswordUI = Pick<
  IValidatePasswordProps,
  "handleChangeValidate"
>;

export const useValidatePasswordUI = ({
  handleChangeValidate,
}: UseValidatePasswordUI) => {
  const [rulesStateArr, setRulesStateArr] = useState<boolean[]>(
    validateRulesArr.map(() => false),
  );

  const handleChangeRulesStateArr = (id: number, newState: boolean) => {
    const index = id - 1;
    const currentState = rulesStateArr[index];
    //? change newState;
    if (currentState !== newState) {
      setRulesStateArr((prevState) => {
        const beforeArr = JSON.parse(JSON.stringify(prevState)).splice(
          0,
          index,
        );
        const afterArr = JSON.parse(JSON.stringify(prevState)).splice(
          index + 1,
        );

        //? new State
        const newStateArr = [...beforeArr, newState, ...afterArr];

        //? undefined = true; false = false
        const findFalseInArray = newStateArr.find((item) => !item);

        //? validate success
        if (findFalseInArray === undefined) {
          handleChangeValidate(true);
        } else {
          handleChangeValidate(false);
        }
        return newStateArr;
      });
    }
  };

  return {
    validateRulesArr,
    handleChangeRulesStateArr,
  };
};
