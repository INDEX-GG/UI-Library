import React, { ReactNode } from "react";
import styled from "styled-components";

interface ITitleProps {
  href?: string;
  children: ReactNode;
}

const Title = ({ children, href = "" }: ITitleProps) => {
  return <LinkSC href={href}>{children}</LinkSC>;
};

const LinkSC = styled("a")`
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #00a0ab;
  margin-bottom: 10px;
`;

export default React.memo(Title);
