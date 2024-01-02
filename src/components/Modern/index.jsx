import React from "react";
import StyleCard from "../StyleCard";

const Modern = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/modern/style1">
        <StyleCard styleName="Modern Style 1" />
      </a>
      <a className="w-full" href="/modern/style2">
        <StyleCard styleName="Modern Style 2" />
      </a>
      <a className="w-full" href="/modern/style3">
        <StyleCard styleName="Modern Style 3" />
      </a>
    </div>
  );
};

export default Modern;
