import React, { useState } from "react";
import "./Form.css";
import "./Dropdown.css";
import CustomerBuy from "./CustomerBuy";
import FreeShipping from "./FreeShipping";

function Dropdown(props) {
    const [dropdownOpt, setDropdownOpt] = useState(false);
    const [radioCheck, setRadioCheck] = useState(true)
    const [customBuy, setCustomBuy] = useState();
    const [Shipping, setShipping] = useState();
    const [defVal, setDefVal] = useState('');
    const [percentVal, setPercentVal] = useState('20 %');
    const [fixedAmtVal, setFixedAmtVal] = useState('$ 200');

    const handleChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value === "7" || e.target.value=== '3') {
            props.onHandleVisibility(true)
            props.onInputVal(e)
            setDropdownOpt(true);
        } else if (e.target.value === "9") {
            props.onHandleVisibility(false)
            props.onInputVal(e)
            setDropdownOpt(false);
            setCustomBuy(true);
        } else if (e.target.value === "8") {
            props.onHandleVisibility(true)
            props.onInputVal(e)
            setDropdownOpt(false);
            setCustomBuy(false);
            setShipping(true);
        }
    };

    const handleMonetaryDefVal = (e) => {
        if(e.target.value === 'percentage'){
            setRadioCheck(true)
            // setPercentVal(percentVal)
            setDefVal(percentVal)
        }
        else if(e.target.value==='fixed_amount'){
            setRadioCheck(false)
            setDefVal(fixedAmtVal)
            // setFixedAmtVal(fixedAmtVal)
        }
    }

    const handleMonetValue= (e) => {
        setPercentVal(e.target.value)
        setFixedAmtVal(e.target.value)
        props.onInputVal(e)
        
    }
    return (
        <>
            <div className="">
                <label htmlFor="classification" className="block bold">
                    Coupon Classification
                </label>

                <select
                    id="classification"
                    className="input select m-y3"
                    onChange={handleChange}
                    // value={props.onData.couponClassification}
                    name="couponClassification"
                >
                    <option value="" disabled selected>
                        Coupon Classification
                    </option>
                    <option name="amtProducts" value="7"  className="option m-y3" >
                        Amount off products
                    </option>
                    <hr />

                    <option name="amtOrders"  value="3" className="option m-y3">
                        Amount off order
                    </option>
                    <hr />
                    <option value="9" className="option m-y3">
                        Buy X get Y
                    </option>
                    <hr />
                    <option value="8" className="option m-y3">
                        Free Shipping
                    </option>
                    <hr />
                </select>
            </div>

            {dropdownOpt ? (
                <div>
                    <label htmlFor="monetary" className="block bold m-t3">
                        Coupon Monetary value*
                    </label>
                    {dropdownOpt ? (
                        <div className="m-t3">
                            {/* <button className="btn-grey">Percentage</button> */}
                            <input
                                type="radio"
                                // checked={radioCheck}
                                id="percentage"
                                name="valueType"
                                className="m-r3"
                                value='percentage'
                                onChange={props.onInputVal}
                                onClick={handleMonetaryDefVal}
                            />
                            <label htmlFor="percentage" className="m-r3">
                                Percentage %
                            </label>
                            {/* <button className="btn-white">Fixed Amount</button> */}
                            <input
                                type="radio"
                                id="fixedAmount"
                                // checked={!radioCheck}
                                name="valueType"
                                className="m-r3"
                                value="fixed_amount"
                                onChange={props.onInputVal}
                                onClick={handleMonetaryDefVal}
                            />
                            <label htmlFor="fixedAmount">
                            Fixed Amount ($)
                            </label>
                        </div>
                    ) : (
                        ""
                    )}
                    <input
                        type="text"
                        id="monetary"
                        className="input m-y3"
                        placeholder="Coupon Monetary value"
                        onChange={handleMonetValue}
                        name="couponMonetaryValue"
                        value={props.onData.couponMonetaryValue}
                    />
                    {/* {!radioCheck && <input
                        type="text"
                        id="monetary"
                        className="input m-y3"
                        placeholder="Coupon Monetary value"
                        onChange={handleMonetValue}
                        name="couponMonetaryValue"
                        value={fixedAmtVal}
                    />} */}
                </div>
            ) : (
                ""
            )}

            {/* ======= customer buy section */}
            {customBuy ? <CustomerBuy /> : ""}

            {Shipping ? <FreeShipping /> : ""}
        </>
    );
}

export default Dropdown;
