import React from 'react';
import s from "./style.css"
const FooterS2B = () => {
    return (
        <div className={"FooterS2B"}>
            <div className=" f-nav">

                <div className="layout ">
                    <ul className={"lg:justify-between lg:px-4"}>
                        <li>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#545650"/>
                            </svg>

                            Home
                        </li>
                        <li>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#545650"/>
                            </svg>

                            Projects
                        </li>
                        <li>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#545650"/>
                            </svg>

                            Contact Us
                        </li>
                        <li>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#545650"/>
                            </svg>

                            About Us
                        </li>
                        <li>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#545650"/>
                            </svg>

                            Soultions
                        </li>
                        <li>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#545650"/>
                            </svg>

                            Home
                        </li>

                    </ul>

                </div>
            </div>

            <div className="footer-main">
                <div className="layout  flex flex-col lg:flex-row gap-16">
                    <div className="footer-section">
                        <div className="footer-title">
                            About
                        </div>
                        <div className="flex ">
                            Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                            Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        </div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-title">
                            Contact
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className=" ">
                                <div className={"text-16 fasthand"}>Phone Number</div>
                                <div className={"text-20"}>+1 443 456 1220</div>
                            </div>
                            <div className="">
                                <div className={"text-16 fasthand"}>Email</div>
                                <div className={"text-20"}>info@TheActualized.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="map rounded-[4px] min-w-[290px] h-[227px] bg-[#D9D9D9] grid place-items-center text-black">
                        MAP
                    </div>

                    <div className="logo min-w-[150px] w-40 mx-auto">
                        <img className={"w-full h-full object-top object-contain"} src="/media/footer/WATERMARK_dark-04 1.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom  pb-8 pt-4">
                Designed by TheActulized.com

            </div>
        </div>
    );
};

export default FooterS2B;
