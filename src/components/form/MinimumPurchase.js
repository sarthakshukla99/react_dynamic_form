import React,{useState} from "react";

function MinimumPurchase(props) {
    const [amtInp , setAmtInp] = useState(false)

    const handleMinAmt= () => {
        setAmtInp(!amtInp)
    }
    return (
        <>
            <label className="block bold m-y3">
                Minimum Purchase Requirements
            </label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="minimum"
                    name="minimumRequirement"
                    className="m-r3"
                />
                <label htmlFor="minimum">
                    No minimum purchase requirements
                </label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="minPurch"
                    name="minimumRequirement"
                    className="m-r3"
                    onChange={handleMinAmt}
                />
                <label htmlFor="minPurch">Minimum purchase amount ($)</label>
                {amtInp ? (
                    <input
                        type="text"
                        className="block smallInp"
                        placeholder="$ enter amount"
                        defaultValue='$ 1000'
                    />
                ) : (
                    ""
                )}
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="minQuan"
                    name="minimumRequirement"
                    className="m-r3"
                />
                <label htmlFor="minQuan">Minimum Quantity</label>
            </div>
        </>
    );
}

export default MinimumPurchase;
