import React from "react";
import s from "./styles.css";
const TextImageS1B = () => {
  return (
    <div className={"TextImageS1B px-4 relative lg:px-20 TextImage-S1-B"}>
      <div
        className={`TextImage-S1-B relative max-w-max mx-auto   lg:flex lg:items-end gap-10   `}
      >
        <div className="border-1 -z-10 border-[#CACACA]/80 w-[600px]  rounded-l-[260px] bottom-0 h-[400px] order-3 hidden lg:block absolute right-0"></div>

        <div className={"flex  overflow-hidden "}>
          <img
            className={
              " mt-auto h-[655px] lg:h-[900px] rounded-t-[260px] lg:w-[550px]  object-cover "
            }
            src="/media/firstfold/Rectangle 38.png"
            alt=""
          />
        </div>

        <div className="text-container lg:w-[400px] flex flex-col  lg:items-start  py-8 lg:p-0  ">
          <div className={"flex flex-col  border-b-1 border-[#D9D9D9] mb-6"}>
            <div className={"fasthand text-[#A2A798] text-24 font-light"}>
              Prop Trader
            </div>
            <h2 className="title text-[#545650] mb-5 lg:mb-0     text-48  ">
              OUR TEAM
            </h2>
          </div>
          <div className={"since mb-12"}>Since 11 March 1997</div>
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

export default TextImageS1B;
