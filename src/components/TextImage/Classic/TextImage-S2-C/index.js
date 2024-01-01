import React from 'react';
import s from "./styles.css"
const TextImageS2C = () => {
    return (
        <div className={`TextImageS2C relative max-w-max mx-auto lg:flex flex-col px-4 lg:px-0  `}>
            <img className={"w-full lg:absolute lg:w-[500px] right-16 bottom-0  lg:h-full  object-cover "} src="/media/firstfold/Rectangle 38.png" alt=""/>
            <h2 className="title  ml-[72px] text-64 hidden lg:block mb-16 ">OUR TEAM</h2>

            <div className="text-container mt-auto p-8 lg:p-0 border-1 lg:pr-[600px]  lg:p-16 border-[#D9D9D9]" >
                <h2 className="title mb-8   text-40 lg:hidden ">OUR TEAM</h2>
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

export default TextImageS2C;
