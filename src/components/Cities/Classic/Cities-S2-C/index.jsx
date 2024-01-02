import React from "react";
import s from "./styles.css";
const CitiesS2C = () => {
  const City = () => {
    return (
      <div className={"relative h-[360px] md:h-[460px]  flex justify-center"}>
        <img
          className={"w-full h-full object-cover"}
          src="/media/city/1.png"
          alt=""
        />
        <div className="px-8 py-6  flex flex-col justify-center gap-2 items-center absolute left-12 right-12 top-12  bg-white cursor-pointer">
          <span className={"name"}>NEW YORK</span>
          <div className={""}>View City</div>
        </div>
      </div>
    );
  };
  return (
    <div
      className={
        "CitiesS2C grid grid-cols-2 md:grid-cols-3 max-w-[1400px] m-auto "
      }
    >
      <City />
      <City />
      <City />
      <City />
      <City />
      <City />
    </div>
  );
};

export default CitiesS2C;
