import { regExpOnlyNumber } from "./regExp";

export const onlyNumberString = (str: string) =>
  str.replace(regExpOnlyNumber, "");

export const getCopyObject = (obj: object) => JSON.parse(JSON.stringify(obj));

export const checkArray = (array: any): boolean =>
  !!(Array.isArray(array) && array.length);

export const getTrueItemInObj = (obj: { [key: string]: any }) => {
  const trueArr = [];
  for (const [, value] of Object.entries(obj)) {
    if (value) trueArr.push(value);
  }
  return trueArr;
};

export const deleteKeysInObject = (
  skipKeyArr: string[],
  object: { [key: string]: any },
) => {
  skipKeyArr.forEach((skipKey) => {
    delete object[skipKey];
  });
};

export const getStringArray = (arr: any[], key = "title") => {
  if (Array.isArray(arr)) {
    return arr.map((item) => item[key]);
  }
  return [];
};

export function ToRubles(num: string | number) {
  num = +num;
  return num.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function ToRusDate(date: string) {
  const adDate = new Date(date),
    options: { [key: string]: string } = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
  return adDate.toLocaleString("ru", options);
}

export const telephoneMask = (state: string) => {
  let inputNumbersValue = onlyNumberString(state);

  let formattedInputValue = "";

  /*! Если пустая строка */
  if (!inputNumbersValue) {
    console.log(inputNumbersValue);
    return "";
  }
  if (inputNumbersValue[0].match(/[1-6, 9]/))
    inputNumbersValue = "7" + inputNumbersValue;
  formattedInputValue = "+7 ";
  if (inputNumbersValue.length > 1) {
    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
  }

  if (state.length >= 0 && state.length <= 18) {
    return formattedInputValue;
  }
  return formattedInputValue;
};

export const saveDataInCookie = (data: string) => {
  if (document) {
    document.cookie = data;
  }
};
