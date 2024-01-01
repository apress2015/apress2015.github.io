import React from 'react';
import s from "./styles.css"
const CitiesS3M = () => {
    const City = ()=>{
        return(
            <div className={"relative h-[360px] md:h-[600px]  flex justify-center"}>
                <img className={"w-full h-full object-cover"} src="/media/city/1.png" alt=""/>
                <div className={"view_btn"}>
                    <div className={""}>
                        View City
                    </div>
                </div>
                <div className={"city_name"}>
                        NEW YORK
                </div>


            </div>
        )

    }
    return (
        <div className={"CitiesS3M grid grid-cols-2 max-w-[1200px] m-auto md:grid-cols-4 "}>
            <City/>
            <City/>
            <City/>
            <City/>
        </div>
    );
};

export default CitiesS3M;
