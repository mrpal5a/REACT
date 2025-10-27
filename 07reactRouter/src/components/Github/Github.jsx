import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    //useLoaderData() data ko load kar deta hai pehle hi, mtlb jab hum hover krte hai kisi page ke uper tab hi uska data fetch krke cache memory mai rakh leta or jab click krte hai tab instant load ho jata hai page
    const data = useLoaderData() //yeh optimized way hai, mtlb data fast load krta hai, niche wale ko nahi likhna padta, bas yeh useLoaderData hook use karo or niche wali githubInfoLoader ko export karo and all set!

    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/mrpal5a")
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return(
        <>
            <div className="bg-gray-700 text-center m-4 p-4" >Followers : {data.followers} 
                <img src={data.avatar_url }   alt="" srcset="" width={300}/>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () =>{ // yeh wala tarika bahut hi optimized hai, isko hi try kare baar baar use krne ka
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}