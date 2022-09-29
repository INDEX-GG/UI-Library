import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(200%);
  }
`;

export const SkeletonSC = styled("div")<{ borderRadius: string }>`
  width: 100%;
  height: 100%;
  background-color: #f2f3f4;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export const SkeletonItemSC = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.04),
    transparent
  );
  animation: ${rotate} 1.5s linear infinite;
`;

export const useSkeletonUIStyles = () => ({
  SkeletonSC,
  SkeletonItemSC,
});
