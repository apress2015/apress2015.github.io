import React from "react";
import StyleCard from "../StyleCard";

const Home = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/boheimian">
        <StyleCard styleName="Boheimian Design" />
      </a>
      <a className="w-full" href="/classic">
        <StyleCard styleName="Classic Design" />
      </a>
      <a className="w-full" href="/modern">
        <StyleCard styleName="Modern Design" />
      </a>
    </div>
  );
};

export default Home;
