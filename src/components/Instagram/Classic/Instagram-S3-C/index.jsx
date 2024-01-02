import React from "react";
import s from "./styles.css";
const InstagramS3C = () => {
  const Item = () => {
    return (
      <div className={"w-full h-[340px] md:h-[380px] "}>
        <img
          className={"w-full h-full object-cover"}
          src="/media/Instagram/1.png"
          alt=""
        />
      </div>
    );
  };
  return (
    <div className={"InstagramS3C"}>
      <div className={"layout py-12"}>
        <div
          className={
            " justify-between flex w-full flex-col md:flex-row items-center gap-2 mb-12"
          }
        >
          <div className={"title"}> Follow us on Instagram!</div>
          <div className={"btn"}>Go to Instagram</div>
        </div>
        <div className=" grid grid-cols-6 md:grid-cols-6 ">
          <div className="col-span-2">
            <Item />
          </div>
          <div className="col-span-2">
            <Item />
          </div>
          <div className="col-span-2">
            <Item />
          </div>
          <div className="col-span-3">
            <Item />
          </div>
          <div className="col-span-3">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramS3C;
