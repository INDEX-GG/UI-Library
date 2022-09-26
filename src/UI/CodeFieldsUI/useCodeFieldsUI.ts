import { ICodeFieldsUIProps } from "UI/CodeFieldsUI/types";
import { useEffect, useMemo, useRef, useState } from "react";

const arrayFields = (fieldCount: number, isKey = false) => {
  const array: (string | { id: number })[] = [];
  for (let i = 1; i <= fieldCount; i++) {
    array.push(isKey ? { id: i } : "");
  }
  return array;
};

export const useCodeFieldsUI = ({
  fieldsCount,
  callbackGetFinalCode,
}: Omit<ICodeFieldsUIProps, "styleComponents">) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [codeArrayValue, setCodeArrayValue] = useState<string[]>([]);

  const fieldCountArray = useMemo(
    () => arrayFields(fieldsCount, true),
    [fieldsCount],
  );

  useEffect(() => {
    setCodeArrayValue(arrayFields(fieldsCount) as string[]);
  }, []);

  const handleChangeCodeArr = (value: string, position: number) => {
    const beforeArr = JSON.parse(JSON.stringify(codeArrayValue));
    const afterArr = JSON.parse(JSON.stringify(codeArrayValue));
    const newValue = [
      ...beforeArr.splice(0, position),
      value,
      ...afterArr.slice(position + 1),
    ];
    const isSendCode = newValue.filter((item) => item).length === fieldsCount;
    if (isSendCode) {
      callbackGetFinalCode(newValue.join(""));
      if (position + 1 === fieldsCount) {
        setTimeout(() => {
          setCodeArrayValue(arrayFields(fieldsCount) as string[]);
          (refContainer.current?.children[0] as HTMLInputElement).focus();
        }, 10);
        return;
      }
    }
    setCodeArrayValue(newValue);
  };

  return {
    fieldsCount,
    arrayFields,
    refContainer,
    codeArrayValue,
    fieldCountArray,
    handleChangeCodeArr,
  };
};
