import { useEffect, useState } from "react";
import { IDrawerProps } from "UI/DrawerUI/types";

export const useDrawerUI = ({
  isOpen,
  handleClose,
  animationTiming,
}: Required<
  Pick<IDrawerProps, "isOpen" | "animationTiming" | "handleClose">
>) => {
  const [isInnerOpen, setIsInnerOpen] = useState<boolean>(false);

  const handlePressKey = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsInnerOpen(isOpen);
    } else {
      setTimeout(() => {
        setIsInnerOpen(false);
      }, animationTiming * 1400);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handlePressKey);
    return () => {
      window.removeEventListener("keydown", handlePressKey);
    };
  }, []);

  return {
    isInnerOpen,
  };
};
