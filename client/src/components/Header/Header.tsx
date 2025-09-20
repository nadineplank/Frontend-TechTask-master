import React from "react";

import "./Header.css";

export const Header: React.FC = () => {
  return (
    <div className={"header"}>
      <strong>home24</strong>
      <input placeholder={"Search"} />
    </div>
  );
};
