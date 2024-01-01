import React from "react";
import "./styles.css";
const CitiesS1B = () => {
  const City = () => {
    return (
      <div
        className={
          "relative m-auto max-w-[450px] items-center flex flex-col flex justify-center"
        }
      >
        <img className={"img"} src="/media/city/1.png" alt="" />
        <div className=" text-center  text-center">
          <span className={"name"}>NEW YORK</span>
        </div>
        <div className={"view_btn"}>View City</div>
      </div>
    );
  };
  return (
    <div
      className={"CitiesS1B grid grid-cols-2 gap-20 md:grid-cols-3 gap-6 mb-20"}
    >
      <City />
      <City />
      <City />
    </div>
  );
};

export default CitiesS1B;
