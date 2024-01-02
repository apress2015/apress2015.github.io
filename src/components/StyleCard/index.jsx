import React from "react";

const StyleCard = (props) => {
  return (
    <div className="flex flex-col items-center w-full border-2">
      <h2 className="py-10 text-2xl font-sans">{props.styleName}</h2>
    </div>
  );
};

export default StyleCard;
