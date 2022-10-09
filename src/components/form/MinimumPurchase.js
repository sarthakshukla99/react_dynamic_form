import React,{useState} from "react";

function MinimumPurchase(props) {
    const [amtInp , setAmtInp] = useState(false)
    const [minAmount , setMinAmount] = useState('$ 1000')

    const handleMinAmtField= (e) => {
        if(e.target.value === 'Minimum purchase amount'){
            setAmtInp(true)
        }
        else{
            setAmtInp(false)
        }

    }

    const handleMinAmount = (e) => {
        setMinAmount(e.target.value)
        props.onInputVal(minAmount)
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
                    value=''
                    onClick={handleMinAmtField}
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
                    value='Minimum purchase amount'
                    onClick={handleMinAmtField}
                />
                <label htmlFor="minPurch">Minimum purchase amount ($)</label>
                {amtInp ? (
                    <input
                        type="number"
                        className="block smallInp"
                        name="minimumPurchaseAmount"
                        placeholder="$ enter amount"
                        value={props.onData.miminimumPurchaseAmount}
                        onChange={props.onInputVal}
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
                    value={props.onData.miminimumPurchaseQuantity}
                    className="m-r3"
                    onClick={handleMinAmtField}
                />
                <label htmlFor="minQuan">Minimum Quantity</label>
            </div>
        </>
    );
}

export default MinimumPurchase;
