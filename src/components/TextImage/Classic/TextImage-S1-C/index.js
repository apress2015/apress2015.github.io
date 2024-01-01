import React from "react";
import s from "./styles.css";
const TextImageS1C = () => {
  return (
    <div
      className={`TextImage-S1-C px-4 lg:px-0 lg:flex lg:h-[400px] lg:gap-5`}
    >
      <img
        className={"w-full lg:h-full lg:max-w-[40%] h-[300px] object-cover "}
        src="/media/firstfold/Rectangle 38.png"
        alt=""
      />
      <div className="text-container p-8 lg:p-0">
        <h2 className="title mb-8 lg:pb-10 xl:pb-14 lg:mb-0 text-white lg:pl-[32px] xl:pl-[72px] lg:bg-white text-40 lg:text-black lg:text-64">
          OUR TEAM
        </h2>
        <p className="desc lg:p-[32px] xl:p-[72px] lg:pt-20">
          Received as a new intake from animal control. Oliver is such a good
          boy, he is super friendly and will be a wonderful addition to any
          family. We have begun the intake process. Vet will check him out
          tomorrow. Oliver has been all cleared by the vet! Now we are waiting
          on his first applications to come in. Oliver is dog and cat friendly!
          Such good news! Oliver caught a case of kennel cough today.
        </p>
      </div>
    </div>
  );
};

export default TextImageS1C;
