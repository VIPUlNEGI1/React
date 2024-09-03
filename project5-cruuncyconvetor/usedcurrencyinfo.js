import { useEffect,useState } from "react";

function useCurrencyInfo(Currency){
    const [data, setData ] = useState({})
    useEffect(() => {
        // i theink
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
        .then((res) => res.json())
        .then((res) => setData(res[Currency]) )
        console.log(data)
    },[Currency])

    return data
}
export default useCurrencyInfo;