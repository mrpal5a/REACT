import { useState, useEffect } from "react";

//this is our custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json()) //whenever we get response from API call, it is in string format, so now we are coneverting it into json format
        .then((res) => setData(res[currency])) // getting the data of that particular currency from API response
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;