import React, { useState } from "react";
import "./Form.css";
import "./Dropdown.css";
import CustomerBuy from "./CustomerBuy";
import FreeShipping from "./FreeShipping";
function Dropdown() {
    const [dropdownOpt, setDropdownOpt] = useState(false);
    const [customBuy, setCustomBuy] = useState();
    const [Shipping, setShipping] = useState()

    const handleChange = (e) => {
        if (e.target.value === "Amount off products") {
            setDropdownOpt(true);
        } else if (e.target.value === "Buy X get Y") {
            setDropdownOpt(false);
            setCustomBuy(true);
        }
        else if(e.target.value === "Free Shipping"){
            setCustomBuy(false)
            setShipping(true)

        }
    };
    return (
        <>
            <div className="">
                <label htmlFor="classification" className="block bold">
                    Coupon Classification
                </label>
                <select
                    name="classification"
                    id="classification"
                    className="input select m-y3"
                    onChange={handleChange}
                >
                    <option value="" disabled selected>
                        Coupon Classification
                    </option>
                    <option value="Amount off products" className="option m-y3">
                        Amount off products
                    </option>
                    <hr />

                    <option value="Amount off order" className="option m-y3">
                        Amount off order
                    </option>
                    <hr />
                    <option value="Buy X get Y" className="option m-y3">
                        Buy X get Y
                    </option>
                    <hr />
                    <option value="Free Shipping" className="option m-y3">
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
                            <button className="btn-grey">Percentage</button>
                            <button className="btn-white">Fixed Amount</button>
                        </div>
                    ) : (
                        ""
                    )}
                    <input
                        type="text"
                        id="monetary"
                        className="input m-y3"
                        placeholder="Coupon Monetary value"
                    />
                </div>
            ) : (
                ""
            )}

            {/* ======= customer buy section */}
            {customBuy? <CustomerBuy/>: ''}

            {Shipping ? <FreeShipping/>:''}
        </>
    );
}

export default Dropdown;
