import React from "react";
import StyleCard from "../StyleCard";

const Home = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/boheimian">
        <StyleCard
          styleName="Boheimian Design"
          title="Boheimian Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Boheimian Design"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/classic">
        <StyleCard
          styleName="Classic Design"
          title="Classic Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Classic Design"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/modern">
        <StyleCard
          styleName="Modern Design"
          title="Modern Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Modern Design"
          />
        </StyleCard>
      </a>
    </div>
  );
};

export default Home;
