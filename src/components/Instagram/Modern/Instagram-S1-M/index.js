import React from 'react';
import s from "./styles.css"
const InstagramS1M = () => {
    const Item = ()=>{
        return(
            <div className={"rounded-8 overflow-hidden"}>
                <img className={"w-full h-full object-cover "} src="/media/Instagram/1.png" alt=""/>
            </div>
        )
    }
    return (
        <div className={"layout InstagramS1M"}>
           <div className={"title"}> Follow us on Instagram!</div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
            <div className={"btn"}>
                Go to Instagram
            </div>
        </div>
    );
};

export default InstagramS1M;
