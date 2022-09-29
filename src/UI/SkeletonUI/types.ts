import { useSkeletonUIStyles } from "UI/SkeletonUI/style";

export const SkeletonStyleObj = useSkeletonUIStyles();

type SkeletonBorderRadius = string;
type SkeletonStyleComponents = Partial<typeof SkeletonStyleObj>;

export interface ISkeletonProps {
  borderRadius?: SkeletonBorderRadius;
  styleComponents?: SkeletonStyleComponents;
}

export const DefaultSkeletonBorderRadius: SkeletonBorderRadius = "0px";
export const DefaultSkeletonStyleComponents: SkeletonStyleComponents =
  SkeletonStyleObj;
