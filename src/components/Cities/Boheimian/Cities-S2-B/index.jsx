import React from "react";
import "./styles.css";
const CitiesS2B = () => {
  const City = ({ second }) => {
    return (
      <div
        className={"relative items-center flex flex-col  flex justify-center"}
      >
        <img className={"img"} src="/media/city/1.png" alt="" />
        <div className="absolute w-4/5 p-4 left-0 bg-white text-center  text-center">
          <div className={"name"}>NEW YORK</div>
          <div className={"view_btn"}>View City</div>
        </div>
      </div>
    );
  };
  return (
    <div className={"CitiesS2B grid md:grid-cols-2 gap-6"}>
      <City />
      <City second />
    </div>
  );
};

export default CitiesS2B;
