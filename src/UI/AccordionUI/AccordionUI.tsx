import React from "react";
import { useAccordionUI } from "UI/AccordionUI/useAccordionUI";
import {
  AccordionStyleObj,
  DefaultAccordionStyleComponents,
  IAccordionProps,
} from "UI/AccordionUI/types";

const AccordionUI = ({
  isOpen,
  children,
  handleChange,
  HeaderComponent,
  styleComponents = DefaultAccordionStyleComponents,
}: IAccordionProps) => {
  //? main-logic
  const { bodyRef, bodyHeight } = useAccordionUI();

  //? style
  const {
    ContainerSC = DefaultContainerSC,
    HeaderButtonSC = DefaultHeaderButtonSC,
    HeaderIconSC = DefaultHeaderIconSC,
    BodySC = DefaultBodySC,
  } = styleComponents;

  return (
    <ContainerSC>
      <HeaderButtonSC type="button" onClick={handleChange}>
        <HeaderComponent />
        <HeaderIconSC>{isOpen ? "-" : "+"}</HeaderIconSC>
      </HeaderButtonSC>
      <BodySC isShow={isOpen} height={bodyHeight}>
        <div ref={bodyRef}>{children}</div>
      </BodySC>
    </ContainerSC>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  HeaderButtonSC: DefaultHeaderButtonSC,
  HeaderIconSC: DefaultHeaderIconSC,
  BodySC: DefaultBodySC,
} = AccordionStyleObj;

export default React.memo(AccordionUI);
