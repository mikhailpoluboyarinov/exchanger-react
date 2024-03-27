import {BlockExchange} from "../BlockExchange/BlockExchange";
import {useEffect, useState} from "react";
import axios from "axios";

export const Main = () => {
    const [rates, setRates] = useState({});

    useEffect(() => {
        axios
            .get("https://v6.exchangerate-api.com/v6/26c9100a504f711412bd8a31/latest/USD")
            .then((res) => {
                setRates(res.data.conversion_rates);
                console.log(res.data.conversion_rates)
            })
            .catch((err) => {
                alert('Ты не получил данные о курсе валют!')
            })
    },[])

    return (
        <div className="main">
            <BlockExchange />
            <BlockExchange />
        </div>
    );
}
