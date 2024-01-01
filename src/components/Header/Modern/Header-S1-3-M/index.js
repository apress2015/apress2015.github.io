import React from 'react';
import styles from "./HeaderC.css";
import logo from "../../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../../images/icons/arrow-right.svg";

const HeaderS13M = () => {
    return (
        <header className={`HeaderS13M text-white relative text-[#363853]  text-center `}>
            {/*<div className={"absolute inset-0 -z-0 opacity-70 w-full h-full bg-black"}></div>*/}
            <img className={"absolute inset-0 -z-10 w-full h-full opacity-50 object-cover"} src="/media/firstfold/Rectangle 47.png" alt=""/>
            <div className={`relative z-10 lg:h-[834px]  p-4 lg:p-10`}>
                <nav className={`w-full lg:px-11 lg:py-[15px] `}>
                    <img src="/media/firstfold/WATERMARK_TheActualized-04 1.png" className={"w-16 lg:w-32 mx-auto mb-10"} alt=""/>
                    <ul
                        className={`hidden  text-[#363853] lg:text-20 lg:flex list-none justify-center child:pr-6`}
                    >
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Plans</li>
                        <li>Solutions</li>
                        <li>Contact</li>
                    </ul>
                    <span className={`flex justify-center text-[#363853] text-12 sm:text-14 lg:text-20 gap-6 roboto items-center mb-16`}>
                        <div className={"flex flex-col lg:flex-row gap-4 items-end"}>
                                 <a href="tel:+1 443 456 1220" className={``}>
                            +1 443 456 1220
                          </a>
                        <a href="mailto:info@TheActualized.com">info@TheActualized.com</a>
                        </div>
                          <div className="lg:hidden ml-4">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7.5H21" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M3 12.5H21" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M3 17.5H21" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </div>

                </span>
                </nav>
                <div className={`flex pb-10 flex-col text-[#363853] justify-center`}>
                    <h1 className={`font-bold lato mb-2 text-40 lg:text-64 lg:leading-[85px] tracking-[0.24em]`}>
                        FIRST FOLD
                    </h1>
                    <h2 className={`text-16 lato tracking-[-0.04em] lg:text-36 lg:leading-[42px] mb-12 lg:tracking-[-0.04em] roboto font-light`}>
                        A Short Description Can be Written Here
                    </h2>
                    <div className={`mt-4 flex justify-center`}>
                        <input
                            type="text"
                            className={`w-full lato  lg:w-[36%] bg-transparent text-[#363853] placeholder:text-[#363853] py-4 px-8 border-1 border-[#363853]`}
                            placeholder="City, Neighbourhood, Zip Code"
                        />
                        <button className={`bg-[#363853] p-5 rounded-r-8`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4297 5.93L20.4997 12L14.4297 18.07" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`flex justify-center w-full lg:w-[40%] lato  mx-auto justify-between text-left  mt-8 mb-16`}>
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

export default HeaderS13M;
