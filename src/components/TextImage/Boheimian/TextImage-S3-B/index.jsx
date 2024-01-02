import React from "react";
import s from "./styles.css";
const TextImageS3B = () => {
  return (
    <div className={" relative lg:px-20 "}>
      <div
        className={`TextImageS3B  relative max-w-max mx-auto lg:items-center  lg:flex gap-10   `}
      >
        <div
          className={
            "flex absolute overflow-hidden mb-8 lg:h-full lg:mb-0 lg:mr-20"
          }
        >
          <img
            className={
              " mt-auto h-[345px] rounded-8  lg:h-full  w-full  object-cover "
            }
            src="/media/firstfold/Rectangle 38.png"
            alt=""
          />
        </div>

        <div className="absolute text-container w-[300px] left-4 bg-white px-10 lg:w-[800px] flex flex-col  lg:items-start  py-8 lg:p-0  ">
          <div className={"flex flex-col   mb-24"}>
            <h2 className="title text-[#545650] mb-2 lg:mb-0     text-48  ">
              OUR TEAM
            </h2>
            <div className={"fasthand text-[#A2A798] text-24 font-light"}>
              Prop Trader
            </div>
          </div>
          <div className={"since mb-4"}>Since 11 March 1997</div>
          <p className="desc text-[#4E5068] text-20 lg:text-24">
            Received as a new intake from animal control. Oliver is such a good
            boy, he is super friendly and will be a wonderful addition to any
            family. We have begun the intake process. Vet will check him out
            tomorrow. Oliver has been all cleared by the vet! Now we are waiting
            on his first applications to come in. Oliver is dog and cat
            friendly! Such good news! Oliver caught a case of kennel cough
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextImageS3B;
