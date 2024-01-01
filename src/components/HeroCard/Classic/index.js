import React from "react";
import style from "./HeroCardC.css";
import arrowLeft from "../../../images/icons/arrow-up.svg";
import arrowRight from "../../../images/icons/arrow-right.svg";
import house from "../../../images/Rectangle 26.svg";
import arrowDown from "../../../images/icons/Arrow - Down Square.svg";
const HeroCardC = () => {
  return (
    <div className="HeroCardC lg:py-[120px]">
      <section className={"cardSection"}>
        <div className="mt-16">
          <div className="w-full border-1 border-t border-[#545650]"></div>
          <div className="flex justify-center items-center -translate-y-1/2">
            <button className={`arrowBtn mr-10 lg:mr-5`}>
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2724 21.8711L9.26159 14.8603C8.43364 14.0324 8.43364 12.6775 9.26159 11.8496L16.2723 4.83881"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h3
              className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}
            >
              Sold Properties
            </h3>
            <button className={`${"arrowBtn"} ml-10 lg:ml-5`}>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2276 21.8711L17.2384 14.8603C18.0664 14.0324 18.0664 12.6775 17.2384 11.8496L10.2277 4.83881"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-max mx-auto flex flex-col lg:flex-row lg:items-center px-4 ">
          <div className={`w-full lg:w-auto`}>
            <img src={house} alt="" className="w-full lg:w-auto " />
          </div>
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">
              11 5152 Canada Way, Burnaby
            </h4>
            <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">
              Keller Williams Realty VanCentral
            </h5>
            <div
              className={`${"priceTag"} w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}
            >
              <span className="font-medium text-[32px] leading-[29px] whitespace-nowrap lg:text-[40px] lg:leading-[37px]">
                $ 317,000
              </span>
              <span className="flex items-center">
                <span className={"off"}>20%</span>
                <img src={arrowDown} alt="arrow down" />
              </span>
            </div>
            <div className={"line"}></div>
            <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">
              3 Beds | 1 Bath | 412 Sqft
            </p>
            <p
              className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] ${"type"}`}
            >
              <span>Type </span>
              Single Family
              <span className="ml-8">Land Size </span>
              5,110,412 sqft
            </p>
            <a href="" className={"listing"}>
              VIEW LISTING
            </a>
          </div>
        </div>
      </section>
      <section className={"cardSection"}>
        <div className="mt-16">
          <div className="w-full border-1 border-t border-[#545650]"></div>{" "}
          {/* fix */}
          <div className="w-full max-w-max mx-auto">
            <div className="  flex justify-around lg:justify-start lg:ml-10 items-center -translate-y-1/2">
              <button className={`${"arrowBtn"}  lg:mr-5`}>
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2724 21.8711L9.26159 14.8603C8.43364 14.0324 8.43364 12.6775 9.26159 11.8496L16.2723 4.83881"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h3
                className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}
              >
                Sold Properties
              </h3>
              <button className={`${"arrowBtn"} lg:ml-5`}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2276 21.8711L17.2384 14.8603C18.0664 14.0324 18.0664 12.6775 17.2384 11.8496L10.2277 4.83881"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` max-w-max mx-auto flex flex-col h-[400px] lg:h-full lg:flex-row lg:justify-end items-center mx-4 p-0 lg:p-5 ${"backgroundSection"}`}
        >
          <div
            className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto ${"content"}`}
          >
            <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">
              11 5152 Canada Way, Burnaby
            </h4>
            <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">
              Keller Williams Realty VanCentral
            </h5>
            <div
              className={`${"priceTag"} w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}
            >
              <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] whitespace-nowrap lg:leading-[37px]">
                $ 317,000
              </span>
              <span className="flex items-center">
                <span className={"off"}>20%</span>
                <img src={arrowDown} alt="arrow down" />
              </span>
            </div>
            <div className={"line"}></div>
            <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">
              3 Beds | 1 Bath | 412 Sqft
            </p>
            <p
              className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] ${"type"}`}
            >
              <span>Type </span>
              Single Family
              <span className="ml-8">Land Size </span>
              5,110,412 sqft
            </p>
            <a href="" className={"listing"}>
              VIEW LISTING
            </a>
          </div>
        </div>
      </section>
      <section className={`mt-72 mb-72 lg:my-16 ${"cardSection"}`}>
        <div className="max-w-max mx-auto w-full">
          <div className="flex mx-10 items-center justify-between translate-y-1/2 ">
            <h3
              className={`font-bold text-[24px] leading-[28px] lg:text-[64px] lg:leading-[74px] p-5 bg-[#fff]`}
            >
              Sold Properties
            </h3>
            <div className="flex">
              <button className={`${"arrowBtn"} mr-2`}>
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2724 21.8711L9.26159 14.8603C8.43364 14.0324 8.43364 12.6775 9.26159 11.8496L16.2723 4.83881"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className={`${"arrowBtn"} ml-2`}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2276 21.8711L17.2384 14.8603C18.0664 14.0324 18.0664 12.6775 17.2384 11.8496L10.2277 4.83881"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` max-w-max mx-auto flex flex-col h-[400px] lg:h-[500px] lg:flex-row lg:justify-end py-5 items-center mx-4 lg:px-12 ${"backgroundSection"}`}
        >
          <div
            className={`p-4 lg:p-10 mt-60 lg:mt-[480px] w-full lg:w-auto ${"content"}`}
          >
            <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">
              11 5152 Canada Way, Burnaby
            </h4>
            <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">
              Keller Williams Realty VanCentral
            </h5>
            <div
              className={`${"priceTag"} w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}
            >
              <span className="font-medium text-[32px] leading-[29px] whitespace-nowrap lg:text-[40px] lg:leading-[37px]">
                $ 317,000
              </span>
              <span className="flex items-center">
                <span className={"off"}>20%</span>
                <img src={arrowDown} alt="arrow down" />
              </span>
            </div>
            <div className={"line"}></div>
            <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">
              3 Beds | 1 Bath | 412 Sqft
            </p>
            <p
              className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] ${"type"}`}
            >
              <span>Type </span>
              Single Family
              <span className="ml-8">Land Size </span>
              5,110,412 sqft
            </p>
            <a href="" className={"listing"}>
              VIEW LISTING
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroCardC;
