import React from 'react';
import style from "./TextOnlyB.css"
const TextOnlyC = () => {
    return (
        <div className={`lg:px-[90px] lg:py-[120px] textonly-b-1`}>
            <div className="w-full  text-center mb-16 py-11 px-8 lg:px-0 rounded-16">
                <p className={"text-16 leading-[21px]"}>About</p>
                <div className={"border-1 border-grayBorder w-full m-auto my-6"}></div>
                <div className="max-w-max mx-auto">

                    <p className={"lg:w-7/12 m-auto text-14 leading-[19px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>

            </div>
            <div className="w-fullmb-16 py-11 rounded-16">
                <div className="max-w-max mx-auto  flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between ">
                    <div className={"w-full lg:w-[45%] px-20"}>
                        <p className={"text-16 leading-[21px] lg:text-36 lg:leading-[48px] mb-6 tracking-[0.235em]"}>ABOUT</p>
                        <p className={"text-14 leading-[19px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                            Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                            Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                            Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        </p>
                    </div>
                    {/*responsive for mobile*/}
                    <div className={`lg:w-1/2 h-full h-[250px] lg:h-[450px] lg:border-1 border-grayBorder rounded-tl-[262px] rounded-bl-[262px] mt-10 lg:mt-0 ml-10 lg:ml-0 ${style.object}`}>
                    </div>
                </div>

            </div>
            <div className="w-full text-center mb-16 py-11 px-8 lg:px-0">
                <div className="max-w-max mx-auto">
                    <p className={"text-16 leading-[21px]"}>About</p>
                    <div className={"border-1 border-grayBorder w-4/5 lg:w-4/12 m-auto my-6"}></div>
                    <p  className={"lg:w-7/12 m-auto text-14 leading-[19px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TextOnlyC;
