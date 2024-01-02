import React from "react";
import style from "./TextOnlyC.css";
const TextOnlyC = () => {
  return (
    <div className={`lg:py-[120px] textonly-c `}>
      <div className="w-full   bg-blackBg text-center mb-16 py-11 text-white px-8 lg:px-0">
        <div className="max-w-max mx-auto">
          <p className={"text-16 leading-[21px]"}>About</p>
          <div
            className={"border-1 border-grayBorder w-4/5 lg:w-4/12 m-auto my-6"}
          ></div>
          <p className={"lg:w-7/12 m-auto text-14 leading-[19px]"}>
            Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam
            aenean duis sit nunc id integer sed. Egestas dictum elementum massa
            gravida fusce ullamcorper nisl ut non. Viverra et lectus velit
            interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui
            nunc nec in at amet. Enim tortor diam etiam quam. Amet nullam vel
            faucibus quisque aliquam quis cursus. Purus. Lorem ipsum dolor sit
            amet consectetur. Fringilla maecenas diam aenean duis sit nunc id
            integer sed. Egestas dictum elementum massa gravida fusce
            ullamcorper nisl ut non. Viverra et lectus velit interdum lectus
            arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at
            amet. Enim tortor diam etiam quam. Amet nullam vel faucibus quisque
            aliquam quis cursus. Purus.
          </p>
        </div>
      </div>
      <div className="w-full relative flex flex-col lg:flex-row justify-center lg:justify-between bg-blackBg mb-16 px-20 py-11 text-white">
        <div className={"w-full max-w-max mx-auto  "}>
          <div className="lg:w-1/2">
            <p
              className={
                "text-16 leading-[21px] lg:text-36 lg:leading-[48px] mb-6 tracking-[0.235em]"
              }
            >
              ABOUT
            </p>
            <p className={"text-14 leading-[19px]"}>
              Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam
              aenean duis sit nunc id integer sed. Egestas dictum elementum
              massa gravida fusce ullamcorper nisl ut non. Viverra et lectus
              velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet
              eget. Dui nunc nec in at amet. Enim tortor diam etiam quam. Amet
              nullam vel faucibus quisque aliquam quis cursus. Purus. Lorem
              ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean
              duis sit nunc id integer sed. Egestas dictum elementum massa
              gravida fusce ullamcorper nisl ut non. Viverra et lectus velit
              interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui
              nunc nec in at amet. Enim tortor diam etiam quam. Amet nullam vel
              faucibus quisque aliquam quis cursus. Purus.
            </p>
          </div>
        </div>
        {/*responsive for mobile*/}
        <span className="font-medium absolute right-20  lg:text-96 lg:leading-[128px] lg:tracking-[0.415em] opacity-20 lg:self-end mt-10 lg:mt-0">
          ABOUT
        </span>
      </div>
      <div className="w-full text-center mb-16 py-11 px-8 lg:px-0">
        <div className="max-w-max mx-auto">
          <p className={"text-16 leading-[21px]"}>About</p>
          <div
            className={"border-1 border-grayBorder w-4/5 lg:w-4/12 m-auto my-6"}
          ></div>
          <p className={"lg:w-7/12 m-auto text-14 leading-[19px]"}>
            Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam
            aenean duis sit nunc id integer sed. Egestas dictum elementum massa
            gravida fusce ullamcorper nisl ut non. Viverra et lectus velit
            interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui
            nunc nec in at amet. Enim tortor diam etiam quam. Amet nullam vel
            faucibus quisque aliquam quis cursus. Purus. Lorem ipsum dolor sit
            amet consectetur. Fringilla maecenas diam aenean duis sit nunc id
            integer sed. Egestas dictum elementum massa gravida fusce
            ullamcorper nisl ut non. Viverra et lectus velit interdum lectus
            arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at
            amet. Enim tortor diam etiam quam. Amet nullam vel faucibus quisque
            aliquam quis cursus. Purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextOnlyC;
