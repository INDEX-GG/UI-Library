import React from "react";
import { IModalProps } from "UI/ModalUI/types";

type StyledComponents = Required<Pick<IModalProps, "styleComponents">>;
type ModalHeaderSCProps = Required<
  Pick<StyledComponents["styleComponents"], "HeaderFullscreenModalSC">
>;

type IModalHeaderProps = ModalHeaderSCProps & Pick<IModalProps, "handleClose">;

const ModalHeader = ({
  HeaderFullscreenModalSC,
  handleClose,
}: IModalHeaderProps) => {
  return (
    <HeaderFullscreenModalSC>
      <button onClick={handleClose}>close modal</button>
      <h1>headerModal</h1>
    </HeaderFullscreenModalSC>
  );
};

export default React.memo(ModalHeader);
