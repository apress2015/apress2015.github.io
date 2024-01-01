import React from 'react';
import  "./styles.css"
const TextImageS1M = () => {
    return (
        <div className={`TextImageS1M relative max-w-max mx-auto lg:pb-20 lg:flex px-4 lg:gap-24 lg:px-0  `}>
            <div className={"flex  flex-col lg:absolute z-10 bottom-0 right-16 lg:w-[432px] lg:h-[432px] lg:opacity-80 lg:rounded-12 overflow-hidden "}>
                <img className={"w-full h-full mt-auto  object-cover "} src="/media/firstfold/Rectangle 38.png" alt=""/>
            </div>

            <div className="text-container flex flex-col items-center lg:items-start p-8 lg:p-16 lg:pr-[520px]    " >
              <div className={"flex flex-col lg:flex-row lg:gap-4 items-center lg:mb-4"}>
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="41" height="41" rx="8" fill="#BEC4FE" fill-opacity="0.17"/>
                      <path d="M28.67 26.0699C28.14 26.5599 27.53 26.9299 26.87 27.1799C26.21 27.4299 25.5 26.9499 25.5 26.2399V24.9199C25.5 22.9699 23.92 21.3899 21.97 21.3899H19.03C17.08 21.3899 15.5 22.9699 15.5 24.9199V26.4999C15.5 27.0499 15.05 27.4999 14.5 27.4999H14.05C11.6 27.1299 10.5 25.1399 10.5 23.3599C10.5 21.6799 11.48 19.8199 13.61 19.2999C13.02 16.9699 13.52 14.7799 15.04 13.1899C16.77 11.3799 19.53 10.6599 21.91 11.3999C24.1 12.0699 25.64 13.8699 26.19 16.3699C28.1 16.7999 29.63 18.2399 30.24 20.2399C30.9 22.4099 30.3 24.6399 28.67 26.0699Z" fill="#617AFF"/>
                      <path d="M21.97 22.8899H19.03C17.76 22.8899 17 23.6499 17 24.9199V27.8599C17 29.1299 17.76 29.8899 19.03 29.8899H21.97C23.24 29.8899 24 29.1299 24 27.8599V24.9199C24 23.6499 23.24 22.8899 21.97 22.8899ZM22.17 26.5499L20.5 28.4499L20.3 28.6799C20.03 28.9899 19.8 28.9099 19.8 28.4899V26.7099H19.04C18.69 26.7099 18.6 26.4999 18.83 26.2399L20.5 24.3399L20.7 24.1099C20.97 23.7999 21.2 23.8799 21.2 24.2999V26.0799H21.96C22.31 26.0699 22.4 26.2899 22.17 26.5499Z" fill="#617AFF"/>
                  </svg>

                  <h2 className="title text-[#617AFF] mb-4 lg:mb-0     text-32  ">OUR TEAM</h2>
              </div>
                <p className="desc text-[#4E5068] lg:text-24">
                    Received as a new intake from animal control.
                    Oliver is such a good boy, he is super friendly and will be a wonderful addition to any family. We have begun the intake process. Vet will check him out tomorrow.
                    Oliver has been all cleared by the vet! Now we are waiting on his first applications to come in.
                    Oliver is dog and cat friendly! Such good news!
                    Oliver caught a case of kennel cough today.
                </p>
            </div>
        </div>
    );
};

export default TextImageS1M;
