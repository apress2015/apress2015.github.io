import React from "react";
import StyleCard from "../StyleCard";

const Classic = () => {
  return (
    <div className="flex justify-between px-10">
      <a href="/classic/style1">
        <StyleCard styleName="Classic Style 1" />
      </a>
      <a href="/classic/style2">
        <StyleCard styleName="Classic Style 2" />
      </a>
      <a href="/classic/style3">
        <StyleCard styleName="Classic Style 3" />
      </a>
    </div>
  );
};

export default Classic;
