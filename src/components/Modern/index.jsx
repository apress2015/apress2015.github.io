import React from "react";
import StyleCard from "../StyleCard";

const Modern = () => {
  return (
    <div className="flex justify-between px-10 gap-5">
      <a className="w-full" href="/modern/style1">
        <StyleCard
          styleName="Modern Style 1"
          title="Modern Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Modern Style 1"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/modern/style2">
        <StyleCard
          styleName="Modern Style 2"
          title="Modern Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Modern Style 1"
          />
        </StyleCard>
      </a>
      <a className="w-full" href="/modern/style3">
        <StyleCard
          styleName="Modern Style 3"
          title="Modern Design"
          body="a design based on Ussop that was inspired by watching One Piece movie that made us think that it is possible to become god"
        >
          <img
            className="w-[400px] "
            src="/media/city/1.png"
            alt="Modern Style 1"
          />
        </StyleCard>
      </a>
    </div>
  );
};

export default Modern;
