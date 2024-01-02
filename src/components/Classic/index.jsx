import React from "react";
import StyleCard from "../StyleCard";

const Classic = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/classic/style1">
        <StyleCard
          styleName="Classic Style 1"
          title="Classic Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Classic Style 1"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/classic/style2">
        <StyleCard
          styleName="Classic Style 2"
          title="Classic Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Classic Style 1"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/classic/style3">
        <StyleCard
          styleName="Classic Style 3"
          title="Classic Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Classic Style 1"
          />
        </StyleCard>
      </a>
    </div>
  );
};

export default Classic;
