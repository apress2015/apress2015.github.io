import React from "react";
import "./HeroCardB.css";
import arrowLeft from "../../../images/icons/arrow-up.svg";
import arrowRight from "../../../images/icons/arrow-right.svg";
import house from "../../../images/Rectangle 2.svg";
import arrowDown from "../../../images/icons/Arrow - Down Square.svg";
const HeroCardB = () => {
  return (
    <div className={"HeroCardB"}>
      <section className={"cardSection"}>
        <div className="my-16">
          <div className="flex justify-center items-center ">
            <button className={`mr-10 lg:mr-28`}>
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
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <h3
              className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}
            >
              Sold Properties
            </h3>
            <button className={`ml-10 lg:ml-28`}>
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
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-max mx-auto flex flex-col lg:flex-row lg:items-center pr-4 ">
          <div className={``}>
            <img
              src={house}
              alt=""
              className="w-full h-full lg:w-auto rounded-tr-[280px] rounded-br-[280px]"
            />
          </div>
          <div className="lg:ml-16 mt-8 lg:mt-0 p-4 lg:p-0">
            <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">
              11 5152 Canada Way, Burnaby
            </h4>
            <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">
              Keller Williams Realty VanCentral
            </h5>
            <div
              className={`priceTag w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}
            >
              <span className="font-medium text-[32px] whitespace-nowrap leading-[29px] lg:text-[40px] lg:leading-[37px]">
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
              className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] type`}
            >
              <span>Type </span>
              Single Family
              <span className="ml-8">Land Size </span>
              5,110,412 sqft
            </p>
            <div className="flex justify-center">
              <a href="" className={"listing"}>
                VIEW LISTING
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className=" lg:py-[120px]">
        <section className={"cardSection"}>
          <div className="my-16">
            <div className="flex justify-center items-center ">
              <button className={`mr-10 lg:mr-28`}>
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
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h3
                className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}
              >
                Sold Properties
              </h3>
              <button className={`ml-10 lg:ml-28`}>
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
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`max-w-max mx-auto flex flex-col lg:flex-row lg:justify-end items-center p-4 lg:p-5 backgroundSectionFirst`}
          >
            <div
              className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto content`}
            >
              <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">
                11 5152 Canada Way, Burnaby
              </h4>
              <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">
                Keller Williams Realty VanCentral
              </h5>
              <div
                className={`priceTag w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}
              >
                <span className="font-medium text-[32px] whitespace-nowrap leading-[29px] lg:text-[40px] lg:leading-[37px]">
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
                className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] type`}
              >
                <span>Type </span>
                Single Family
                <span className="ml-8">Land Size </span>
                5,110,412 sqft
              </p>
              <div className="flex justify-center">
                <a href="" className={"listing"}>
                  VIEW LISTING
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={"cardSection"}>
          <div className="flex mx-10 my-16 items-center justify-center translate-y-1/2">
            <div className="flex justify-center items-center ">
              <button className={`mr-10 lg:mr-28`}>
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
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h3
                className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}
              >
                Sold Properties
              </h3>
              <button className={`ml-10 lg:ml-28`}>
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
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`max-w-max mx-auto  flex flex-col lg:flex-row lg:justify-end py-5 items-center px-4 lg:px-12 backgroundSectionSecond`}
          >
            <div
              className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto content`}
            >
              <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">
                11 5152 Canada Way, Burnaby
              </h4>
              <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">
                Keller Williams Realty VanCentral
              </h5>
              <div
                className={`priceTag w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}
              >
                <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px] whitespace-nowrap">
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
                className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] type`}
              >
                <span>Type </span>
                Single Family
                <span className="ml-8">Land Size </span>
                5,110,412 sqft
              </p>
              <div className="flex justify-center">
                <a href="" className={"listing"}>
                  VIEW LISTING
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroCardB;
