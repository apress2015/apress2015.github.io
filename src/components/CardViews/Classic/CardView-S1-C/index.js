import React from "react";

const CardviewS1C = () => {
  const Card = () => {
    return (
      <div className={"w-full max-w-[400px]"}>
        <img className={"w-full "} src="/media/cardview/1.png" alt="" />
        <div className="content mt-8">
          <div className="flex justify-between w-full mb-2">
            <h5 className={"card-title"}>11 5152 Canada Way, Burnaby</h5>
            <div className="card-price">$ 317,000</div>
          </div>
          <div className="flex justify-between w-full mb-4">
            <div className="card-desc">Keller Williams Realty VanCentral</div>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.12313 4.26855L3.9998 7.40522L0.876465 4.26855"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between w-full card-desc">
            <div className="flex items-center gap-2">
              <span>3 Beds</span>|<span>1 Bath</span>|<span>412 Sqft</span>
            </div>
            <div className="name">Wood Frame, Townhouse</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={"w-full grid sm:grid-cols-2 gap-4 p-4 flex-wrap"}>
      <Card />
    </div>
  );
};

export default CardviewS1C;
