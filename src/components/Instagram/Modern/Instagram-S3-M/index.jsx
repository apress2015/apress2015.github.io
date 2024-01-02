import React from "react";
import s from "./styles.css";
const InstagramS3M = () => {
  const Item = () => {
    return (
      <div
        className={"w-full h-[340px] md:h-[380px] rounded-12 overflow-hidden"}
      >
        <img
          className={"w-full h-full object-cover"}
          src="/media/Instagram/1.png"
          alt=""
        />
      </div>
    );
  };
  return (
    <div className={"InstagramS3M"}>
      <div className={"layout p-12"}>
        <div
          className={
            " justify-between flex w-full flex-col md:flex-row items-center gap-2 mb-12"
          }
        >
          <div className={"title"}> Follow us on Instagram!</div>
          <div className={"btn"}>Go to Instagram</div>
        </div>
        <div className=" grid grid-cols-4 md:grid-cols-4 gap-4">
          <div className="col-span-2">
            <Item />
          </div>
          <div className="col-span-2">
            <Item />
          </div>
          <div className="col-span-2">
            <Item />
          </div>
          <div className="col-span-2">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramS3M;
