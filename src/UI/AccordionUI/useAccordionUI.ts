import { useRef } from "react";

export const useAccordionUI = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyHeight = bodyRef.current?.offsetHeight || 0;

  return { bodyRef, bodyHeight };
};
