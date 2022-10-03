import React from "react";

const VirtualListUi = () => {
  return (
    <div>
      <h1>
        use:{" "}
        <a href="https://react-window.vercel.app/#/examples/list/fixed-size">
          React window (easy)
        </a>
      </h1>
      <h1>
        use:{" "}
        <a href="https://bvaughn.github.io/react-virtualized/#/components/List">
          React virtualized (advance)
        </a>{" "}
      </h1>
    </div>
  );
};

export default React.memo(VirtualListUi);
