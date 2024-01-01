import React from "react";
import s from "./styles.css";
const CardviewS3C = () => {
  const Card = () => {
    return (
      <div className={"w-full max-w-[400px] relative"}>
        <img
          className={"w-full  h-[500px]"}
          src="/media/cardview/1.png"
          alt=""
        />
        <div className="gradient-top"></div>
        <div className="gradient-bot"></div>
        <div className="content p-6 absolute text-center top-0 w-full z-[2] ">
          <div className="w-full  card-title">11 5152 Canada Way, Burnaby</div>
          <div className="card-desc w-full mb-4">
            Keller Williams Realty VanCentral
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-col items-start text-14 ">
              <span className={"whitespace-nowrap"}>3 Beds</span>
              <span className={"whitespace-nowrap"}>1 Bath</span>
              <span className={"whitespace-nowrap"}>412 Sqft</span>
            </div>
            <div className="name flex justify-between w-full text-[#363853]">
              Wood Frame, Townhouse
            </div>
            <div>
              <div className="card-price ">$ 317,000</div>
              <div className={"flex items-center gap-2"}>
                20%
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99992 7.40497L3.99992 0.594971"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.12313 4.26855L3.9998 7.40522L0.876465 4.26855"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-60 font-medium absolute z-[2] left-6 bottom-6 border-b-1 border-b-black py-3 ">
          View Property
        </div>
      </div>
    );
  };
  return (
    <div
      className={`CardviewS3C w-full grid sm:grid-cols-2 gap-4 p-4 flex-wrap `}
    >
      <Card />
    </div>
  );
};

export default CardviewS3C;
