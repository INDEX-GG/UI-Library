import React from "react";
import styled from "styled-components";

const REPO_PATH = "https://github.com/INDEX-GG/UI-Library/tree/main/src/UI";

interface IGithubLinkProps {
  componentName: string;
}

const GithubLink = ({ componentName }: IGithubLinkProps) => {
  return (
    <LinkSC href={`${REPO_PATH}/${componentName}`}>
      Source code: {componentName}
    </LinkSC>
  );
};

const LinkSC = styled("a")`
  display: block;
  margin-bottom: 10px;
`;

export default React.memo(GithubLink);
