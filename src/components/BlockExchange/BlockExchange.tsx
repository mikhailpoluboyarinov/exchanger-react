import {CURRENCY} from "../../utils/constancts";
import {NOMINAL} from "../../utils/constancts";


export const BlockExchange = () => {


    return (
        <div className="block">
            <ul className="currencies">
                {
                    CURRENCY.map((cur:string) => <li
                        key={cur}
                        className="currency">
                        {cur}
                    </li>)
                }
            </ul>
            <input
                className="block_input"
                type="number"
                placeholder="0"
                value={0}
            />
            <ul className="nominals">
                {
                    NOMINAL.map((nom:number) => <li
                        key={nom}
                        className="nominal">
                        {nom}
                    </li>)
                }
            </ul>
        </div>
    );
}
