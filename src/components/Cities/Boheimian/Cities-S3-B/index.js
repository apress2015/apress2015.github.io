import React from 'react';
import "./styles.css"
const CitiesS3B = () => {
    const City = ()=>{
        return(
            <div className={"relative h-[500px] md:h-[750px] max-w-[450px] m-auto flex justify-center"}>
                <img className={"w-full h-full object-cover"} src="/media/city/1.png" alt=""/>

                <div className={"city"}>
                    <div className={"name"}>
                        NEW YORK
                    </div>
                    <div className={"view"}>
                        View City
                    </div>
                </div>


            </div>
        )

    }
    return (
        <div className={"CitiesS3B p-10 grid  lg:gap-20  gap-6 md:grid-cols-3   mb-20"}>
            <City/>
            <City/>
            <City/>
        </div>
    );
};

export default CitiesS3B;
