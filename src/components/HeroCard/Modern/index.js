import React from 'react';
import style from './HeroCardM.css'
import arrowLeft from '../../../images/icons/arrow-up-small.svg'
import arrowRight from '../../../images/icons/arrow-up-small2.svg'
import house from '../../../images/Rectangle 26.svg'
import arrowDown from '../../../images/icons/Arrow-Down Square blue.svg'
const HeroCardM = () => {
    return (
        <div className=" HeroCardM w-full max-w-max mx-auto lg:py-[160px]">
            <section className={`rounded-16 cardSection`}>
                <div className="mt-16">
                    <div className="flex justify-center items-center py-10">
                        <button className={`arrowBtn mr-10 lg:mr-5`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className="font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px] px-4">Sold Properties</h3>
                        <button className={`arrowBtn ml-10 lg:ml-5`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:px-10 pb-10">
                    <div className="w-full lg:w-auto ">
                        <img src={house} alt="" className="w-full lg:w-auto rounded-16" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 flex flex-col items-center  ">
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`priceTag mt-10`}>
                            <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px]">$ 317,000</span>
                            <span className="flex items-center">
                                <span className={"off"}>20%</span>
                                <img src={arrowDown} alt="arrow down"/>
                            </span>
                        </div>
                        <div className={"line"}></div>
                        <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">3 Beds | 1 Bath | 416 Sqft</p>
                        <p className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] type`} >
                            <span>Type </span>
                            Single Family
                            <span className="ml-8">Land Size </span>
                            5,110,416 sqft
                        </p>
                        <a href="" className={"listing"}>VIEW LISTING</a>
                    </div>
                </div>
            </section>

            <section className={"cardSection"}>
                <div className="mt-16">
                    <div className="flex items-center justify-center ">
                        <button className={`arrowBtn mr-10 lg:mr-5`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                        <button className={`arrowBtn ml-10 lg:ml-5`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col h-[400px] lg:h-[550px] lg:flex-row lg:justify-end items-center mt-10 rounded-16 lg:p-5 backgroundSectionFirst`}>
                    <div className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto lg:rounded-16 flex flex-col items-center content`}>
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`priceTag  mt-4`}>
                            <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px]">$ 317,000</span>
                            <span className="flex items-center">
                                <span className={"off"}>20%</span>
                                <img src={arrowDown} alt="arrow down"/>
                            </span>
                        </div>
                        <div className={"line"}></div>
                        <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">3 Beds | 1 Bath | 416 Sqft</p>
                        <p className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] type`} >
                            <span>Type </span>
                            Single Family
                            <span className="ml-8">Land Size </span>
                            5,110,416 sqft
                        </p>
                        <a href="" className={"listing"}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
            <section className={`mt-72 mb-72 lg:my-16 cardSection`}>
                <div className="flex mx-10 items-center justify-between translate-y-[115%] lg:translate-y-full">
                    <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[40px] p-4 lg:p-5 rounded-16 bg-[#fff]`}>Sold Properties</h3>
                    <div className="flex">
                        <button className={`arrowBtn mr-2`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <button className={`arrowBtn ml-2`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col h-[400px] lg:h-[500px] lg:flex-row lg:justify-center items-center mt-10 rounded-16 lg:p-5 backgroundSectionSecond`}>
                    <div className={`p-4 lg:p-10 mt-60 lg:mt-[490px] w-full lg:w-auto lg:rounded-16 flex flex-col items-center content`}>
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`priceTag  mt-10`}>
                            <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px]">$ 317,000</span>
                            <span className="flex items-center">
                                <span className={"off"}>20%</span>
                                <img src={arrowDown} alt="arrow down"/>
                            </span>
                        </div>
                        <div className={"line"}></div>
                        <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">3 Beds | 1 Bath | 416 Sqft</p>
                        <p className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] type`} >
                            <span>Type </span>
                            Single Family
                            <span className="ml-8">Land Size </span>
                            5,110,416 sqft
                        </p>
                        <a href="" className={"listing"}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroCardM;
