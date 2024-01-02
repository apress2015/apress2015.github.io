import React from "react";
import s from "./styles.css";
const TextImageS3M = () => {
  return (
    <div className={"px-4 lg:px-0"}>
      <div className={`TextImageS3M relative max-w-max mx-auto  lg:flex   `}>
        <div
          className={
            "flex  flex-col relative z-10  lg:min-w-[500px] xl:min-w-[700px] lg:w-[500px] lg:min-h-[432px] rounded-12 overflow-hidden "
          }
        >
          <img
            className={"w-full h-full mt-auto min-h-[300px]  object-cover "}
            src="/media/firstfold/Rectangle 38.png"
            alt=""
          />
          <div
            className={
              "flex  absolute bg-white px-8 py-4 rounded-l-12 bottom-12 right-0 flex-col lg:flex-row lg:gap-4 items-center "
            }
          >
            <h2 className="title text-black lg:mb-0     text-32  ">OUR TEAM</h2>
          </div>
        </div>

        <div className="text-container flex flex-col  lg:items-start lg:justify-end lg:pb-0 lg:pr-0 p-8 lg:p-16    ">
          <div className={"hidden lg:block mb-4 mt-auto"}>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3932 23.4267C26.6865 24.08 25.8732 24.5733 24.9932 24.9067C24.1132 25.24 23.1665 24.6 23.1665 23.6533V21.8933C23.1665 19.2933 21.0598 17.1867 18.4598 17.1867H14.5398C11.9398 17.1867 9.83317 19.2933 9.83317 21.8933V24C9.83317 24.7333 9.23317 25.3333 8.49984 25.3333H7.89984C4.63317 24.84 3.1665 22.1867 3.1665 19.8133C3.1665 17.5733 4.47317 15.0933 7.31317 14.4C6.5265 11.2933 7.19317 8.37333 9.21984 6.25333C11.5265 3.84 15.2065 2.88 18.3798 3.86667C21.2998 4.76 23.3532 7.16 24.0865 10.4933C26.6332 11.0667 28.6732 12.9867 29.4865 15.6533C30.3665 18.5467 29.5665 21.52 27.3932 23.4267Z"
                fill="#617AFF"
              />
              <path
                d="M18.4602 19.1867H14.5402C12.8468 19.1867 11.8335 20.2 11.8335 21.8933V25.8133C11.8335 27.5067 12.8468 28.52 14.5402 28.52H18.4602C20.1535 28.52 21.1668 27.5067 21.1668 25.8133V21.8933C21.1668 20.2 20.1535 19.1867 18.4602 19.1867ZM18.7268 24.0667L16.5002 26.6L16.2335 26.9067C15.8735 27.32 15.5668 27.2133 15.5668 26.6533V24.28H14.5535C14.0868 24.28 13.9668 24 14.2735 23.6533L16.5002 21.12L16.7668 20.8133C17.1268 20.4 17.4335 20.5067 17.4335 21.0667V23.44H18.4468C18.9135 23.4267 19.0335 23.72 18.7268 24.0667Z"
                fill="#617AFF"
              />
            </svg>
          </div>
          <div className="text-[#617AFF] font-black mb-3 text-24 lg:text-32 ">
            Passion Led Us Here!
          </div>
          <p className="desc text-[#4E5068] lg:text-24">
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

export default TextImageS3M;
