import React from "react";
import { useAccordionUI } from "UI/AccordionUI/useAccordionUI";
import {
  AccordionStyleObj,
  DefaultAccordionDuration,
  DefaultAccordionStyleComponents,
  IAccordionProps,
} from "UI/AccordionUI/types";
import ArrowCloseIcon from "./assets/icon/ArrowCloseIcon/ArrowCloseIcon";
import ArrowOpenIcon from "./assets/icon/ArrowOpenIcon/ArrowOpenIcon";

export const AccordionUI = ({
  isOpen,
  children,
  handleChange,
  HeaderComponent,
  duration = DefaultAccordionDuration,
  styleComponents = DefaultAccordionStyleComponents,
}: IAccordionProps) => {
  //? main-logic
  const { height, bodyRef } = useAccordionUI({ isOpen, children });

  //? style
  const {
    ContainerSC = DefaultContainerSC,
    HeaderButtonSC = DefaultHeaderButtonSC,
    HeaderIconSC = DefaultHeaderIconSC,
    BodySC = DefaultBodySC,
    ContentSC = DefaultContentSC,
  } = styleComponents;

  return (
    <ContainerSC id="accordion">
      <HeaderButtonSC type="button" onClick={handleChange}>
        <HeaderComponent />
        <HeaderIconSC>
          {isOpen ? <ArrowCloseIcon /> : <ArrowOpenIcon />}
        </HeaderIconSC>
      </HeaderButtonSC>
      <BodySC height={height} duration={duration} isShow={isOpen}>
        <ContentSC ref={bodyRef}>{children}</ContentSC>
      </BodySC>
    </ContainerSC>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  HeaderButtonSC: DefaultHeaderButtonSC,
  HeaderIconSC: DefaultHeaderIconSC,
  BodySC: DefaultBodySC,
  ContentSC: DefaultContentSC,
} = AccordionStyleObj;

export default React.memo(AccordionUI);
