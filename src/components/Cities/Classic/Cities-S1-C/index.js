import React from 'react';
import s from "./styles.css"
const CitiesS1C = () => {
    const City = ()=>{
        return(
            <div className={"relative h-[340px] flex justify-center"}>
                <img className={"w-full h-full object-cover"} src="/media/city/1.png" alt=""/>
                <div className="h-full flex justify-center items-center absolute inset-0 m-auto text-center">
                   <span className={"name"}>
                        NEW YORK
                   </span>
                </div>
                <div className={"view_btn"}>
                    View City
                </div>
            </div>
        )

    }
    return (
        <div className={" CitiesS1C grid grid-cols-2 md:grid-cols-5 gap-6 "}>
            <City/>
            <City/>
            <City/>
            <City/>
            <City/>
        </div>
    );
};

export default CitiesS1C;
