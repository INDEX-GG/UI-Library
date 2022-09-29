import { useAccordionUIStyles } from "UI/AccordionUI/style";
import { FC, ReactNode } from "react";

export const AccordionStyleObj = useAccordionUIStyles();

type AccordionHeaderComponent = FC;
type AccordionStyleComponents = Partial<typeof AccordionStyleObj>;

export interface IAccordionProps {
  isOpen: boolean;
  children: ReactNode;
  handleChange: () => void;
  HeaderComponent: AccordionHeaderComponent;
  styleComponents?: AccordionStyleComponents;
}

export const DefaultAccordionStyleComponents: AccordionStyleComponents =
  AccordionStyleObj;
