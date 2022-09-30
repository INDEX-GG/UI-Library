import { useEffect, useRef, useState } from "react";
import { IAccordionProps } from "UI/AccordionUI/types";

type UseAccordionUIProp = Required<
  Pick<IAccordionProps, "isOpen" | "children">
>;

export const useAccordionUI = ({ isOpen, children }: UseAccordionUIProp) => {
  const [height, setHeight] = useState<number>(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const handleResize = () => {
    setHeight(bodyRef.current?.offsetHeight || 0);
  };

  useEffect(() => {
    // open
    if (isOpen) {
      setHeight(bodyRef.current?.offsetHeight || 0);
      // resize
      window.addEventListener("resize", handleResize);
    }
    // unmount
    return () => {
      setHeight(0);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // children collapse
  useEffect(() => {
    // confirm children collapse open or close
    if (height && bodyRef.current) {
      const currentHeight = bodyRef.current.offsetHeight || 0;
      console.log(currentHeight);
      // open
      if (isOpen) {
        const addHeight = 8000;
        setHeight(currentHeight + addHeight);
      }
    }
  }, [children]);

  return { bodyRef, height };
};
