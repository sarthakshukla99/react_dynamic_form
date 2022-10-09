import React from "react";
import CustomerGet from "./CustomerGet";

function CustomerBuy() {
    return (
        <>
            <label className="block bold m-y3">Customer buys*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="minCustbuy"
                    name="radio"
                    value='minimumQuantityOfItems'
                    className="m-r3"
                />
                <label htmlFor="minCustbuy">Minimun quantity of items</label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="puchaseAmt"
                    name="radio"
                    value='minimumQuantityOfAmount'
                    className="m-r3"
                />
                <label htmlFor="puchaseAmt">Minimum Purchase amount</label>
            </div>

            {/* ==== */}
            <label className="block m-y3">Quantity*</label>
            <input type="text" className="smallInp" defaultValue='3' />

            <label htmlFor="itemCategory" className="block m-t3">
                Any items from
            </label>
            <select
                name="classification"
                id="itemCategory"
                className="input select m-y3"
            >
                <option value="Specific collection" selected>
                    Specific collection
                </option>
            </select>

            <input type="text" className="input" placeholder="search products" />
            <button type="button" className="btn m-l3">Browse</button>
            {/* ==== */}

            <CustomerGet/>
        </>
    );
}

export default CustomerBuy;
