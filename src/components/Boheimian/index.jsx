import React from "react";
import StyleCard from "../StyleCard";

const Boheimian = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/boheimian/style1">
        <StyleCard styleName="Boheimian Style 1" />
      </a>
      <a className="w-full" href="/boheimian/style2">
        <StyleCard styleName="Boheimian Style 2" />
      </a>
      <a className="w-full" href="/boheimian/style3">
        <StyleCard styleName="Boheimian Style 3" />
      </a>
    </div>
  );
};

export default Boheimian;
