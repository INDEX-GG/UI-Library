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
  const {
    ContainerSC = DefaultContainerSC,
    HeaderButtonSC = DefaultHeaderButtonSC,
    HeaderIconSC = DefaultHeaderIconSC,
    BodySC = DefaultBodySC,
  } = styleComponents;

  const { bodyRef, contentHeight } = useAccordionUI();

  return (
    <ContainerSC style={{ opacity: contentHeight ? 1 : 0 }}>
      <HeaderButtonSC type="button" onClick={handleChange}>
        <HeaderComponent />
        <HeaderIconSC>+</HeaderIconSC>
      </HeaderButtonSC>
      <BodySC height={contentHeight} isShow={isOpen} ref={bodyRef}>
        {children}
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
