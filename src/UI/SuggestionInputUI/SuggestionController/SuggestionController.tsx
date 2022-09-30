import React, { useState } from "react";
import { SuggestionInputUI } from "UI/SuggestionInputUI/SuggestionInputUI";
import SuggestionItem from "UI/SuggestionInputUI/SuggestionItem/SuggestionItem";

const SuggestionController = () => {
  const [value, setValue] = useState<string>("");
  return (
    <SuggestionInputUI
      data={[
        { text: "First" },
        { text: "Second" },
        { text: "Before" },
        { text: "After" },
        { text: "First1" },
        { text: "Second2" },
        { text: "Before1" },
        { text: "After2" },
        { text: "After3" },
        { text: "After4" },
      ]}
      dataValueKey="text"
      suggestionCount={5}
      SuggestionItemComp={SuggestionItem}
      inputProps={{ placeholder: "Поиск", value }}
      handleChangeValue={(search) => setValue(search)}
    />
  );
};

export default React.memo(SuggestionController);
