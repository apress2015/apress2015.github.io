import React from "react";
import styles from "./HeaderC.css";
import logo from "../../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../../images/icons/arrow-right.svg";

const HeaderS2M = () => {
  return (
    <>
      <header className={`HeaderS2M`}>
        <div className={`w-full`}>
          <nav className={`w-full mx-auto py-4 px-7 lg:px-11 lg:py-[15px]`}>
            <div className="flex max-w-max mx-auto text-white items-center">
                <img className={"w-16 mr-4"} src="/media/firstfold/WATERMARK_TheActualized-04 1.png" alt=""/>
                <ul className={`hidden lato lg:flex list-none items-center text-[#363853] child:pr-6`}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Plans</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                </ul>
                <span className={`flex flex-col text-[#363853] lato font-normal ml-auto items-end text-14 lg:text-16`}>
                  <a href="tel:+1 443 456 1220">+1 443 456 1220</a>
                  <a href="mailto:info@TheActualized.com">info@TheActualized.com</a>
                </span>
                <div className="lg:hidden ml-8">
                    <svg className={""} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7.5H21" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 12.5H21" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 17.5H21" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>

                </div>
            </div>
          </nav>
          <div className={`px-4 max-w-max mx-auto flex-col lg:flex-row flex mt-2 lg:mt-[32px] justify-between`}>
             <div className="text-black flex flex-col order-2 lg:order-1 pt-10 lg:pt-[70px] lg:w-[50%] px-0 lg:pr-[50px] text-left h-[100%]">
                <div className={" mb-[24px] mx-auto lg:mx-0 "}>
                    <h1 className="font-bold text-40  lato lg:text-[53px] tracking-[.24em]  ">FIRST FOLD</h1>
                    <div className="desc  lato text-[#363853] font-thin lg:hidden roboto">
                        A Short Description Can be Written Here
                    </div>
                </div>
                 <p className="font-normal lato text-[#363853] text-16 md:text-[24px] mb-[32px]">Received as a new intake from animal control.
                     Oliver is such a good boy, he is super friendly and will be a wonderful addition to any family. We have begun the intake process. Vet will check him out tomorrow.
                 </p>
                 <div className="w-full flex-row flex">
                     <input className="border-1 rounded-l-8 lato text-20 border-[#363853] placeholder-[#363853] w-full py-4 px-8" type="text" placeholder="City, Neighbourhood, Zip Code"/>
                     <button className="bg-[#363853] rounded-r-12 p-[20px]">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                     </button>
                 </div>
                 <div className="mt-10 px-8 lato lg:px-0 lg:mt-[100px] flex justify-between">
                     <div>
                         <p className="font-light text-16 lg:text-[24px] text-[#363853]">Properties Sold</p>
                         <p className="font-black text-20 lg:text-[36px] text-[#363853]">157 K</p>
                     </div>
                     <div>
                         <p className="font-light text-16 lg:text-[24px] text-[#363853]">Properties Sold</p>
                         <p className="font-black text-20 lg:text-[36px] text-[#363853]">157 K</p>
                     </div>
                 </div>
             </div>
             <div className={`text-white order-1  relative w-full h-[350px] lg:w-[50%] lg:h-[800px]`}>
                 <img src="/media/firstfold/Rectangle 47.png" className={"w-full h-full absolute object-cover rounded-12"} alt=""/>
             </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default HeaderS2M;
