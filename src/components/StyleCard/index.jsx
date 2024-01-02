import React from "react";

const StyleCard = (props) => {
  return (
    <div className="flex flex-col items-center w-full border-2">
      <h2 className="py-10 text-2xl font-sans font-bold">{props.styleName}</h2>
      {props.children}
      <h3 className="py-10 text-xl font-serif">{props.title}</h3>
      <p className="px-20 pb-10 text-xl font-sans text-justify text-gray-600">
        {props.body}
      </p>
    </div>
  );
};

export default StyleCard;
