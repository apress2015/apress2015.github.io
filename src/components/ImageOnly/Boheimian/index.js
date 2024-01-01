import React from 'react';
import style from "./ImageOnlyB.css";
import image from "../../../images/Rectangle 26.png"
import image2 from "../../../images/Footer (2).svg"
const ImageOnlyB = () => {
    return (
        <div className={`lg:px-[90px] lg:py-[120px] overflow-hidden text-imageOnlyBText ImageOnlyB`}>
            <div className={`max-w-max lg:mx-auto flex flex-col lg:flex-row justify-between items-center`}>
                <div className={`w-full lg:w-[70%]`}>
                    {/*<img src={image} alt="" className={"w-full  "}/>*/}
                    <img className={"w-full h-full rounded-tr-[400px] rounded-br-[400px]  object-cover"} src="/media/text-only.png" alt=""/>

                </div>
                <h1 className={"font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px]"}>Beyond Design.</h1>
            </div>
            <div className={"mt-20 "}>
                <div className={`max-w-max lg:mx-auto relative flex h-[400px] lg:h-[700px] p-12  `}>
                    <img className={"w-full h-full absolute inset-0  object-cover"} src="/media/text-only.png" alt=""/>

                    <h1 className={"z-10 font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px]"}>Beyond Design.</h1>
                </div>
            </div>
                <div className={`max-w-max lg:mx-auto flex flex-col lg:flex-row items-center mt-20 mx-8 `}>
                    <img className={"w-[500px] h-[800px]  inset-0  object-cover"} src="/media/text-only.png" alt=""/>
                    <h1 className={"mx-auto h-full my-5 font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px]"}><span>Beyond</span> <span>Design.</span> </h1>
            </div>
        </div>

    );
};

export default ImageOnlyB;
