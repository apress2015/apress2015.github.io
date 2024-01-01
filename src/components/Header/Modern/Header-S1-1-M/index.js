import React from "react";
import "./HeaderC.css";
import logo from "../../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../../images/icons/arrow-right.svg";

const HeaderS11M = () => {
  return (
    <header className={` HeaderS11M text-white relative text-center `}>
      {/*<div className={"absolute inset-0 -z-0 opacity-20 w-full h-full bg-b"}></div>*/}
      <img
        className={
          "absolute inset-0 -z-10 w-full h-full opacity-50 object-cover"
        }
        src="/media/firstfold/Rectangle 47.png"
        alt=""
      />
      <div className={` mx-auto lato relative z-[3] lg:h-[834px] p-4  lg:p-10`}>
        <nav
          className={`w-full mb-16 max-w-max py-1 px-4 mx-auto items-center lg:px-11 lg:py-[15px] flex justify-between text-black`}
        >
          <img
            className={"w-16 lg:hidden"}
            src="/media/firstfold/WATERMARK_TheActualized-04 1.png"
            alt=""
          />
          <ul className={`hidden lg:flex list-none items-center child:pr-6`}>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>Home</li>
            <li>Projects</li>
            <li>Plans</li>
            <li>Solutions</li>
            <li>Contact</li>
          </ul>
          <span
            className={`flex ml-auto roboto text-14 sm:text-14  flex-col items-end`}
          >
            <a href="tel:+1 443 456 1220">+1 443 456 1220</a>
            <a href="mailto:info@TheActualized.com">info@TheActualized.com</a>
          </span>
          <div className="lg:hidden ml-4">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7.31836H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 12.3184H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 17.3184H21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </nav>
        <div className={` flex flex-col justify-center `}>
          <h1
            className={`font-bold mb-2 text-[#363853] text-40  lato lg:text-64 lg:leading-[85px] tracking-[0.24em]`}
          >
            FIRST FOLD
          </h1>
          <h2
            className={`text-16 text-[#363853] tracking-[-0.04em] lg:text-36 lg:leading-[42px] mb-16 lg:tracking-[-0.04em] roboto font-light`}
          >
            A Short Description Can be Written Here
          </h2>
          <div className={`mt-4  flex justify-center`}>
            <input
              type="text"
              className={`w-full rounded-l-8  lg:w-[36%] bg-transparent text-20 text-white placeholder:text-[#363853] py-4 px-8 border-1 border-[#363853]`}
              placeholder="City, Neighbourhood, Zip Code"
            />
            <button className={`bg-[#363853]  p-5 rounded-r-8`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={`flex justify-center mb-40 text-[#363853] px-4 w-full lg:w-[40%] mx-auto justify-between text-left  mt-8`}
          >
            <span className={`flex flex-col mr-4 `}>
              <span className={`lg:text-24 text-16 lg:"leading-[32px]`}>
                Properties Sold
              </span>
              <span className={`font-black lg:text-36 leading-[48px]`}>
                157 <span className={`mb-1`}>K</span>
              </span>
            </span>
            <span className={`flex flex-col mr-4 `}>
              <span className={`lg:text-24 text-16 lg:leading-[32px]`}>
                Properties Sold
              </span>
              <span className={`font-black lg:text-36 leading-[48px]`}>
                157 <span className={`mb-1`}>K</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderS11M;
