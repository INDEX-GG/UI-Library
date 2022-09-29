import styled, { css } from "styled-components";
import { IAvatarProps } from "UI/AvatarUI/types";

const SmallSizeCSS = {
  size: css`
    width: 45px;
    height: 45px;
  `,
  text: css`
    font-size: 20px;
  `,
};

const MediumSizeCSS = {
  size: css`
    width: 60px;
    height: 60px;
  `,
  text: css`
    font-size: 26px;
  `,
};

const LargeSizeCSS = {
  size: css`
    width: 80px;
    height: 80px;
  `,
  text: css`
    font-size: 36px;
  `,
};

type SizeProps = Pick<IAvatarProps, "size">;

const ContainerSC = styled("a")<SizeProps>`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #00a0ab;
  text-decoration: none;
  ${({ size }) =>
    size === "small"
      ? SmallSizeCSS.size
      : size === "medium"
      ? MediumSizeCSS.size
      : size === "large"
      ? LargeSizeCSS.size
      : null}
`;

const AvatarImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const WrapperSC = styled("div")<{ customBackground: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ customBackground }) => customBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const LettersSC = styled("p")<SizeProps>`
  color: white;
  user-select: inherit;
  pointer-events: inherit;
  ${({ size }) =>
    size === "small"
      ? SmallSizeCSS.text
      : size === "medium"
      ? MediumSizeCSS.text
      : size === "large"
      ? LargeSizeCSS.text
      : null};
`;

export const useAvatarUIStyles = () => ({
  WrapperSC,
  LettersSC,
  ContainerSC,
  AvatarImageSC,
});
