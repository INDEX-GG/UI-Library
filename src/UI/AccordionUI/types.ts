import { useAccordionUIStyles } from "UI/AccordionUI/style";
import { FC, ReactNode } from "react";

export const AccordionStyleObj = useAccordionUIStyles();

type AccordionDuration = number;
type AccordionStyleComponents = Partial<typeof AccordionStyleObj>;

export interface IAccordionProps {
  isOpen: boolean;
  children: ReactNode;
  handleChange: () => void;
  HeaderComponent: FC;
  duration?: AccordionDuration;
  styleComponents?: AccordionStyleComponents;
}

export const DefaultAccordionDuration: AccordionDuration = 0.3;
export const DefaultAccordionStyleComponents: AccordionStyleComponents =
  AccordionStyleObj;
