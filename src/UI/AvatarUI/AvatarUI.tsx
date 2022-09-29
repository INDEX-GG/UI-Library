import React from "react";
import {
  AvatarStyleObj,
  DefaultAvatarIsHref,
  DefaultAvatarSrc,
  DefaultAvatarStyleComponents,
  DefaultAvatarSurname,
  IAvatarProps,
} from "UI/AvatarUI/types";
import { useAvatarUI } from "UI/AvatarUI/useAvatarUI";

//! delete real project
const BASER_URL = "http://localhost:3000";
//! add profile url
const PROFILE_URL = `${BASER_URL}/user/`;
//! add image server
const PROFILE_SRC = "";

export const AvatarUI = ({
  id,
  name,
  size,
  src = DefaultAvatarSrc,
  surname = DefaultAvatarSurname,
  isAvatarHref = DefaultAvatarIsHref,
  styleComponents = DefaultAvatarStyleComponents,
}: IAvatarProps) => {
  //? main logic
  const { backgroundStringToColor } = useAvatarUI({ name });

  //? customStyles
  const {
    ContainerSC = DefaultContainerSC,
    AvatarImageSC = DefaultAvatarImageSC,
    WrapperSC = DefaultWrapperSC,
    LettersSC = DefaultLettersSC,
  } = styleComponents;

  //? dynamic tag
  const DynamicContainerSC = ContainerSC.withComponent(
    isAvatarHref ? "a" : "div",
  );
  const dynamicContainerProps = isAvatarHref
    ? { href: `${PROFILE_URL}${id}` }
    : {};

  return (
    <DynamicContainerSC size={size} {...dynamicContainerProps}>
      {src && (
        <AvatarImageSC
          src={`${PROFILE_SRC}${src}`}
          alt={`Аватарка пользователя ${name}`}
        />
      )}
      {!src && (
        <WrapperSC customBackground={backgroundStringToColor}>
          <LettersSC size={size}>
            {(name[0] || "").toUpperCase()}
            {(surname[0] || "").toUpperCase()}
          </LettersSC>
        </WrapperSC>
      )}
    </DynamicContainerSC>
  );
};

const {
  ContainerSC: DefaultContainerSC,
  AvatarImageSC: DefaultAvatarImageSC,
  WrapperSC: DefaultWrapperSC,
  LettersSC: DefaultLettersSC,
} = AvatarStyleObj;

export default React.memo(AvatarUI);
