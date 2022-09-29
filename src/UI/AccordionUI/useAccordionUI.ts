import { useEffect, useRef, useState } from "react";

export const useAccordionUI = () => {
  const [contentHeight, setIsContentHeight] = useState<number>(0);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setIsContentHeight(bodyRef.current?.offsetHeight || 0);
  }, []);

  return { bodyRef, contentHeight };
};
