import React from "react";
import StyleCard from "../StyleCard";

const Modern = () => {
  return (
    <div className="flex justify-between px-10">
      <a href="/modern/style1">
        <StyleCard styleName="Modern Style 1" />
      </a>
      <a href="/modern/style2">
        <StyleCard styleName="Modern Style 2" />
      </a>
      <a href="/modern/style3">
        <StyleCard styleName="Modern Style 3" />
      </a>
    </div>
  );
};

export default Modern;
