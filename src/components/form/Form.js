import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Form.css";
import MinimumPurchase from "./MinimumPurchase";
import PurchaseType from "./PurchaseType";
function Form() {

    // const [amtInp , setAmtInp] = useState(false)
    const [limitTimes , setLimitTimes] = useState(false)

    
    const handleLimitTimes= () => {
        setLimitTimes(!limitTimes)
    }

    return (
        <>
            <form action="" className="data-container">
                <div>
                    <label htmlFor="coupon" className="block bold m-t3">
                        Coupon Name*
                    </label>
                    <input
                        type="text"
                        id="coupon"
                        className="input m-y3"
                        placeholder="Coupon Name"
                    />
                    <label htmlFor="discount" className="block bold m-t3">
                        Discount Code*
                    </label>
                    <div className="discount">
                        <button className="btn-outline m-r3">Add Prefix</button>
                        <input
                            type="text"
                            id="discount"
                            className="input m-y3 m-r3"
                            placeholder="Add Code"
                        />
                        <button className="bold btn">Generate</button>
                    </div>
                    <div className="tnc">
                        <label htmlFor="tnc" className="block bold">
                            Coupon Terms and Conditions*
                        </label>
                        <textarea
                            name="tnc"
                            className="input m-y3"
                            placeholder="Terms and Conditions"
                            id="tnc"
                            cols="30"
                            rows="3"
                        ></textarea>
                    </div>
{/* ======= */}
                    <Dropdown />
{/*======= */}
                    
{/* ====*/}
                    <PurchaseType/>
{/* ====*/}
                    <MinimumPurchase
                        
                    />
{/* ====*/}
                    <p className="block bold m-y3">Maximum Coupon Usage*</p>
                    <input
                        type="checkbox"
                        id="usage"
                        className="m-r3"
                        placeholder="Coupon Name"
                        onClick={handleLimitTimes}
                    />

                    <label htmlFor="usage" className="">
                        Limit Number of times this cab be used in total
                    </label>
                    {limitTimes?<input type="number" defaultValue='2000' className="block smallInp" placeholder="enter a number"/>: ''}

                    <div className="m-t3 m-b3">
                        <input
                            type="checkbox"
                            id="usage"
                            className="m-r3"
                            placeholder="Coupon Name"
                        />

                        <label htmlFor="usage" className="m-b3">
                            Limit to one use per customer
                        </label>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;
