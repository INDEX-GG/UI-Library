import React from "react";
import { useSuggestionItemStyle } from "UI/SuggestionInputUI/SuggestionItem/style";
import { IDefaultSuggestionItemProps } from "UI/SuggestionInputUI/types";

interface ICustomSuggestionItemProps extends IDefaultSuggestionItemProps {
  text: string;
}

const SuggestionItem = ({
  text,
  index,
  activeSuggestion,
  handleHoverSuggestion,
}: ICustomSuggestionItemProps) => {
  const isActive = index === activeSuggestion;
  return (
    <ButtonItemSC
      activeIndex={isActive}
      onMouseEnter={handleHoverSuggestion(index)}
      onMouseLeave={handleHoverSuggestion(0)}>
      <ItemSC>{text}</ItemSC>
    </ButtonItemSC>
  );
};

const { ItemSC, ButtonItemSC } = useSuggestionItemStyle();

export default React.memo(SuggestionItem);
