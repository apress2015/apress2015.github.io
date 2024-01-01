import React from "react";
import styles from "./HeaderC.css";
import logo from "../../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../../images/icons/arrow-right.svg";

const HeaderS3M = () => {
  return (
    <>
      <header className={` HeaderS3M text-white text-center `}>
        <div className={`w-full  `}>
          <nav className={`w-full mx-auto py-2 px-7 lg:px-11 lg:py-[15px]`}>
            <div className="flex max-w-max mx-auto text-white items-center">
                <img className={"w-16 lg:hidden"} src="/media/footer/WATERMARK_dark-04%201.png" alt=""/>
                <ul className={`hidden lato lg:flex list-none text-black items-center child:pr-6`}>
                    <img className={"w-20 "} src="/media/footer/WATERMARK_dark-04%201.png" alt=""/>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Plans</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                </ul>
                <span className={`flex flex-col text-black roboto font-normal ml-auto items-end text-14 lg:text-16`}>
              <a href="tel:+1 443 456 1220">+1 443 456 1220</a>
              <a href="mailto:info@TheActualized.com">info@TheActualized.com</a>
            </span>
                <div className="lg:hidden ml-8">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7.31836H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 12.3184H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 17.3184H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>


                </div>
            </div>
          </nav>
          <div className={`max-w-max  mx-auto mt-auto flex-col flex lg:mt-[32px] px-4 lg:px-10 pb-0 lg:pb-4 py-20 w-full  relative justify-between `}>
              <img className={"absolute lg:w-4/5 mx-auto lg:px-4 bg-black h-full inset-0 -z-20 object-cover"} src="/media/firstfold/Rectangle 47.png" alt=""/>
             <div className="text-black order-2 bg-white/40 max-w-[600px] backdrop-blur-[32px] rounded-8   lg:order-1 py-6   lg:w-[50%] mx-auto  px-4 lg:px-8 ">
                <div className={" mb-[0px]"}>
                    <h1 className="font-bold lato text-28 px-7 lg:px-10 py-1 lg:py-3 lg:text-[53px] tracking-[.20em] ">FIRST FOLD</h1>
                </div>
                 <p className="font-light text-[#363853] lato text-16 md:text-[24px] text-left mb-[32px]">Received as a new intake from animal control.
                     Oliver is such a  good boy, he is super friendly and will be a wonderful addition to any family. We have begun the intake process. Vet will check him out tomorrow.
                 </p>
                 <div className="w-full flex-row flex">
                     <input className="border-1 lato w-full text-[#363853] text-14 border-[#363853] bg-transparent placeholder-[#363853] w-full py-4 px-4 rounded-l-8" type="text" placeholder="City, Neighbourhood, Zip Code"/>
                     <button className="bg-[#363853] rounded-r-8 p-[12px]">
                         <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.4795 5.92993L20.5495 11.9999L14.4795 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M3.5498 12H20.3798" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>

                     </button>
                 </div>
                 <div className="mt-10 lg:px-10 text-left lato lg:px-0 lg:mt-[32px] flex justify-between">
                     <div>
                         <p className="font-light text-4 lg:text-[24px] text-[#363853]">Properties Sold</p>
                         <p className="font-black text-6 lg:text-[36px] text-[#363853]">157 K</p>
                     </div>
                     <div>
                         <p className="font-light text-4 lg:text-[24px] text-[#363853]">Properties Registered</p>
                         <p className="font-black text-6 lg:text-[36px] text-[#363853]">157 K</p>
                     </div>
                 </div>
             </div>
             {/*<div className={`text-white order-1  w-full h-[350px] lg:w-[50%] lg:h-[800px] ${styles.rightBackground}`}>*/}

             {/*</div>*/}
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderS3M;
