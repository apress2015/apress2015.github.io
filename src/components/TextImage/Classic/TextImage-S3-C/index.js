import React from 'react';
import s from "./styles.css"
const TextImageS3C = () => {
    return (
        <div className={`TextImageS3C relative max-w-max mx-auto lg:flex px-4 lg:gap-24 lg:px-0  `}>
            <div className={"flex flex-col"}>
                <div className={"bg-text lg:text-[80px] xl:text-120 -mb-14 hidden lg:block -z-10 "}>OUR TEAM</div>
                <img className={"w-full  lg:min-w-[500px] xl:min-w-[700px]  lg:h-[90%] mt-auto  object-cover "} src="/media/firstfold/Rectangle 38.png" alt=""/>
            </div>

            <div className="text-container lg:pt-0  p-8 lg:p-0 lg:border-l-1 border-[#A0A0A0]   lg:p-16 " >
                <h2 className="title mb-8 lg:mb-20 lg:text-64    text-40  ">OUR TEAM</h2>
                <p className="desc lg:text-24">
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

export default TextImageS3C;
