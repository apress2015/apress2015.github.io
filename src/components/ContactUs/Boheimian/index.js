import React from 'react';
import style from "./ContactUsB.css"
const ContactUsB = () => {
    return (
        <div className="ContactUsB  lg:px-[90px] lg:py-[120px]">
            <section className={` helpSection`}>
                <div className="max-w-max m-auto flex  flex-col lg:flex-row items-center py-8 px-4 lg:mt-10 lg:py-10 lg:px-28">

                <div className="lg:w-[70%]">
                    <h5 className={`font-medium text-[36px] leading-[65px] help`}>How can we help...</h5>
                    <p className="text-sm mt-6">Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
                <form className="flex flex-col lg:ml-10 w-full   lg:w-[30%] mt-10 lg:mt-0" action="src/components">
                    <h5 className="text-36 lg:leading-[53px] mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={"contactInput"} />
                    <input type="email" placeholder="Email ..." className={"contactInput"}/>
                    <input type="email" placeholder="Your Message ..." className={"contactInput"}/>
                    <button className={"contactButton"}>SEND</button>
                </form>
                </div>
            </section>
            <section className={`w-full px-2  helpSection`}>
                <div className="max-w-max m-auto flex  flex-col lg:flex-row items-center py-8 px-4 lg:mt-10 lg:py-10 lg:px-28">

                <form className=" lg:w-[40%] mx-auto flex flex-col px-12 mt-10" action="src/components">
                    <h5 className="text-36 lg:leading-[53px] text-center mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={"contactInput"} />
                    <input type="email" placeholder="Email ..." className={"contactInput"}/>
                    <input type="email" placeholder="Your Message ..." className={"contactInput"}/>
                    <button className={"contactButton"}>SEND</button>
                </form>
                </div>
            </section>
            <section className={` helpSection`}>
                <div className="max-w-max m-auto flex  flex-col lg:flex-row items-center py-8 px-4 lg:mt-10 lg:py-10 lg:px-28">

                <form className="w-full flex flex-col lg:ml-10 lg:w-[30%] mt-10 lg:mt-0 order-2 lg:order-1" action="src/components">
                    <h5 className="text-36 lg:leading-[53px]  mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={"contactInput"} />
                    <input type="email" placeholder="Email ..." className={"contactInput"}/>
                    <input type="email" placeholder="Your Message ..." className={"contactInput"}/>
                    <button className={"contactButton"}>SEND</button>
                </form>
                <div className="h-6 border border-[#D8D8D8] order-2 mx-16"></div>
                <div className="w-full lg:w-[70%] border-[#545650] border-b lg:border-0 pb-16 order-1 lg:order-2">
                    <h5 className={`font-medium text-[36px] leading-[65px] help`}>How can we help...</h5>
                    <p className="text-sm mt-6 ">Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUsB;
