import React from "react";
import styles from "./HeaderC.css";
import logo from "../../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../../images/icons/arrow-right.svg";

const HeaderS13C = () => {
  return (
    <header className={`HeaderS13C text-white relative text-center `}>
      <div
        className={"absolute inset-0 -z-0 opacity-70 w-full h-full bg-black"}
      ></div>
      <img
        className={"absolute inset-0 -z-10 w-full h-full object-cover"}
        src="/media/firstfold/Rectangle 38.png"
        alt=""
      />
      <div className={`relative z-10 lg:h-[834px]  p-4 lg:p-10`}>
        <nav className={`w-full lg:px-11 lg:py-[15px] `}>
          <img
            src="/media/firstfold/WATERMARK_TheActualized-04 2.png"
            className={"w-16 mx-auto mb-10"}
            alt=""
          />
          <ul className={`hidden lg:flex list-none justify-center child:pr-6`}>
            <li>Home</li>
            <li>Projects</li>
            <li>Plans</li>
            <li>Solutions</li>
            <li>Contact</li>
          </ul>
          <span
            className={`flex justify-center text-12 sm:text-14 gap-6 roboto items-center mb-16`}
          >
            <a href="tel:+1 443 456 1220" className={``}>
              +1 443 456 1220
            </a>
            <a href="mailto:info@TheActualized.com">info@TheActualized.com</a>
            <div className="lg:hidden ml-4">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7.5H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12.5H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17.5H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </span>
        </nav>
        <div className={`flex pb-10 flex-col justify-center`}>
          <h1
            className={`font-bold mb-2 text-40 lg:text-64 lg:leading-[85px] tracking-[0.24em]`}
          >
            FIRST FOLD
          </h1>
          <h2
            className={`text-16 tracking-[-0.04em] lg:text-36 lg:leading-[42px] mb-32 lg:tracking-[-0.04em] roboto font-light`}
          >
            A Short Description Can be Written Here
          </h2>
          <div className={`mt-8 flex justify-center`}>
            <input
              type="text"
              className={`w-full lg:w-[36%] bg-transparent text-white placeholder:text-white py-4 px-8 border-1 border-white`}
              placeholder="City, Neighbourhood, Zip Code"
            />
            <button className={`bg-white`}>
              <img className={`p-5`} src={arrow} alt="arrow" />
            </button>
          </div>
          <div
            className={`flex justify-center w-full lg:w-[40%]   mx-auto justify-between text-left  mt-16`}
          >
            <span className={`flex flex-col mr-4 lg:mr-0 `}>
              <span className={`text-16 lg:text-16 leading-[32px]`}>
                Properties Sold
              </span>
              <span className={`font-black text-20 lg:text-24 leading-[48px]`}>
                157 <span className={`mb-1`}>K</span>
              </span>
            </span>
            <span className={`flex flex-col mr-4 lg:mr-0 `}>
              <span className={`text-16 lg:text-16 leading-[32px]`}>
                Properties Sold
              </span>
              <span className={`font-black text-20 lg:text-24 leading-[48px]`}>
                157 <span className={`mb-1`}>K</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderS13C;
