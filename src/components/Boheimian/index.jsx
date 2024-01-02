import React from "react";
import StyleCard from "../StyleCard";

const Boheimian = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/boheimian/style1">
        <StyleCard
          styleName="Boheimian Style 1"
          title="Boheimian Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Boheimian Style 1"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/boheimian/style2">
        <StyleCard
          styleName="Boheimian Style 2"
          title="Boheimian Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Boheimian Style 2"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/boheimian/style3">
        <StyleCard
          styleName="Boheimian Style 3"
          title="Boheimian Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Boheimian Style 2"
          />
        </StyleCard>
      </a>
    </div>
  );
};

export default Boheimian;
