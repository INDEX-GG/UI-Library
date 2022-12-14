import React from "react";

const MessageIcon = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.84743 20.1511C8.41501 21.0346 10.1837 21.5 11.9992 21.5C17.7884 21.5 22.5 16.7898 22.5 11C22.5 5.20853 17.7884 0.5 12.0008 0.5C6.20994 0.5 1.5 5.20853 1.5 11C1.5 12.8142 1.96542 14.583 2.84879 16.152L1.55421 20.8306L1.31882 21.6812L2.16946 21.4458L6.84743 20.1511Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};

export default React.memo(MessageIcon);
