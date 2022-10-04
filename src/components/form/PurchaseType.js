import React from "react";

function PurchaseType() {
    return (
        <>
            <label className="block bold m-y3">Purchase Type*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="oneTime"
                    name="radio"
                    className="m-r3"
                />
                <label htmlFor="oneTime">One Time Purchase</label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="subcription"
                    name="radio"
                    className="m-r3"
                />
                <label htmlFor="subcription">Subscription</label>
            </div>

            <div className="block m-t3">
                <input type="radio" id="both" name="radio" className="m-r3" />
                <label htmlFor="both">Both</label>
            </div>
        </>
    );
}

export default PurchaseType;
