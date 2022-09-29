import React from "react";
import {
  DefaultSkeletonBorderRadius,
  DefaultSkeletonStyleComponents,
  ISkeletonProps,
  SkeletonStyleObj,
} from "UI/SkeletonUI/types";

export const SkeletonUI = ({
  borderRadius = DefaultSkeletonBorderRadius,
  styleComponents = DefaultSkeletonStyleComponents,
}: ISkeletonProps) => {
  const {
    SkeletonSC = DefaultSkeletonSC,
    SkeletonItemSC = DefaultSkeletonItemSC,
  } = styleComponents;

  return (
    <SkeletonSC borderRadius={borderRadius}>
      <SkeletonItemSC />
    </SkeletonSC>
  );
};

const { SkeletonSC: DefaultSkeletonSC, SkeletonItemSC: DefaultSkeletonItemSC } =
  SkeletonStyleObj;

export default React.memo(SkeletonUI);
