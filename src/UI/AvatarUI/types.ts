import { useAvatarUIStyles } from "UI/AvatarUI/style";

export const AvatarStyleObj = useAvatarUIStyles();

type AvatarId = number;
type AvatarName = string;
type AvatarSize = "small" | "medium" | "large";
type AvatarSrc = string;
type AvatarSurname = string;
type AvatarIsHref = boolean;
type AvatarStyleComponents = Partial<typeof AvatarStyleObj>;

export interface IAvatarProps {
  id: AvatarId;
  name: AvatarName;
  size: AvatarSize;
  src?: AvatarSrc;
  surname?: AvatarSurname;
  isAvatarHref?: AvatarIsHref;
  styleComponents?: AvatarStyleComponents;
}

export const DefaultAvatarSrc: AvatarSrc = "";
export const DefaultAvatarIsHref: AvatarIsHref = true;
export const DefaultAvatarSurname: AvatarSurname = "";
export const DefaultAvatarStyleComponents: AvatarStyleComponents =
  AvatarStyleObj;
