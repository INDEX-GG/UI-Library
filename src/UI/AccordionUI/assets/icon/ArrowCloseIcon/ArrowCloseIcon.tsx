import React from "react";

const ArrowCloseIcon = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.24051 6.72284L6.24051 1.72284L11.2405 6.72284"
        fill="#AAAAAA"
      />
      <path
        d="M1.24051 6.72284L6.24051 1.72284L11.2405 6.72284H1.24051Z"
        stroke="#AAAAAA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default React.memo(ArrowCloseIcon);
