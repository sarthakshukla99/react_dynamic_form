import React from "react";

function PurchaseType(props) {
    return (
        <>
            <label className="block bold m-y3">Purchase Type*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="oneTime"
                    name="valueType"
                    value='1'
                    onChange={props.onInputVal}
                    className="m-r3"
                />
                <label htmlFor="oneTime">One Time Purchase</label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="subcription"
                    name="valueType"
                    value='2'
                    onChange={props.onInputVal}
                    className="m-r3"
                />
                <label htmlFor="subcription">Subscription</label>
            </div>

            <div className="block m-t3">
                <input type="radio" id="both" name="valueType" value='3' onChange={props.onInputVal} className="m-r3" />
                <label htmlFor="both">Both</label>
            </div>
        </>
    );
}

export default PurchaseType;
