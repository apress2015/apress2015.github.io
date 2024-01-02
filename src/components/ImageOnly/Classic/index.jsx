import React from "react";
import style from "./ImageOnlyC.css";
const ImageOnlyC = () => {
  return (
    <div
      className={"w-full lg:px-[90px] lg:py-[120px] overflow-hidden ImageOnlyC"}
    >
      <div
        className={`relative max-w-max mx-auto flex justify-center items-center h-[590px] lg:h-[400px] `}
      >
        <img
          className={"w-full h-full absolute inset-0  object-cover"}
          src="/media/text-only.png"
          alt=""
        />

        <h1
          className={
            "z-10 font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px] tracking-[0.4em]"
          }
        >
          Beyond Design.
        </h1>
      </div>
      <div className={"  relative mt-20 h-[550px] "}>
        <div className={`relative z-10 w-full max-w-max mx-auto  h-full `}>
          <div
            className={`relative h-full lg:w-[70%] mr-auto left-0 flex  items-end p-12 `}
          >
            <img
              className={"w-full h-full absolute inset-0  object-cover"}
              src="/media/text-only.png"
              alt=""
            />
            <h1
              className={
                "z-10 font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px] tracking-[0.4em]"
              }
            >
              Beyond Design.
            </h1>
          </div>
        </div>
        <div
          className={
            "absolute w-full h-[110%]  border-dark Border border-1 -top-6 inset-x-1/3"
          }
        ></div>
      </div>
      <div
        className={` relative max-w-max mx-auto flex justify-end items-center mt-20 h-[800px] lg:h-[700px] `}
      >
        <img
          className={"w-full h-full absolute inset-0  object-cover"}
          src="/media/text-only.png"
          alt=""
        />

        <div
          className={
            "bg-white z-10 h-full flex items-end pb-20 mr-10 lg:mr-24 px-5 lg:px-12"
          }
        >
          <h1
            className={
              " flex flex-col lg:flex-row font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px] tracking-[0.4em]"
            }
          >
            <span>Beyond</span> <span>Design.</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageOnlyC;
