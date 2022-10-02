import React, { useLayoutEffect, useState, MouseEvent } from "react";
import styled from "styled-components";

interface IRippleEffectProps {
  color: string;
  duration: number;
}

type RippleCord = { x: number; y: number; size: number };

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const RippleEffect = (props: IRippleEffectProps) => {
  const { duration, color } = props;
  const [rippleArray, setRippleArray] = useState<RippleCord[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    // setRippleArray([]);
  });

  const addRipple = (event: MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    console.log(
      event.clientY - (event.target as HTMLButtonElement).offsetTop - size / 2,
    );
    const x = event.pageX - rippleContainer.x - size / 2;
    const y =
      event.clientY - (event.target as HTMLButtonElement).offsetTop - size / 2;
    // console.log(event.pageY - rippleContainer.y - size / 2);

    // if (rippleContainer.height >= rippleContainer.width) {
    //   y = 0;
    // }

    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

const RippleContainer = styled.div<{ duration: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ color }) => color};
    animation-name: ripple;
    animation-duration: ${({ duration }) => duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export default React.memo(RippleEffect);
