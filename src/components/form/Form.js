import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Form.css";
import MinimumPurchase from "./MinimumPurchase";
import PurchaseType from "./PurchaseType";
function Form() {
    const [data, setData] = useState({
        couponClassification: "",
        couponMonetaryValue: "",
        couponName: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        customerIds: [6396146352386],
        isOncePerCustomer: "",
        usageLimit: "",
        countryIds: [468906901762],
        allocationLimit: "10",
        valueType: "",
        minimumQuantityOfItems: null,
        minimumPurchaseAmount: "",
        entitledCollectionIds: [401293345026],
        productIds: [7810687664386],
        termsAndConditions: "",
        couponCode: "",
        purchaseType: "1",
    });

    let name, value;

    const handleInput = (e) => {
        // console.log(e.target.value);
        name = e.target.name;
        value = e.target.value;

        setData({ ...data, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        const {
            couponClassification,
            couponMonetaryValue,
            couponName,
            startDate,
            startTime,
            endDate,
            endTime,
            customerIds,
            isOncePerCustomer,
            usageLimit,
            countryIds,
            allocationLimit,
            valueType,
            minimumQuantityOfItems,
            minimumPurchaseAmount,
            entitledCollectionIds,
            productIds,
            termsAndConditions,
            couponCode,
            purchaseType,
        } = data;

        let API_URL = "https://demo-shopify-apis.frt.one";

        let userData = {
            couponClassification,
            couponMonetaryValue,
            couponName,
            startDate,
            startTime,
            endDate,
            endTime,
            customerIds,
            isOncePerCustomer,
            usageLimit,
            countryIds,
            allocationLimit,
            valueType,
            minimumQuantityOfItems,
            minimumPurchaseAmount,
            entitledCollectionIds,
            productIds,
            termsAndConditions,
            couponCode,
            purchaseType,
        };

        console.log(userData);

// ========== using promise ==========

        // fetch(API_URL, {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(userData),
        // })
        //     .then((result) => {
        //         result.json()
        //         .then((resultData) => {
        //             console.log("INPUT DATA ===>", resultData);
        //         });
        //     })
        //     .catch((err) => {
        //         console.log("something went wrong", err);
        //     });


// ========== using async await  ==========

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }); 

        const apiData = await response.json();

        if(!apiData){
            window.alert('something went wrong')
            console.log('something went wrong');
        }
        else{
            window.alert('submitted successfully')
            console.log('submitted successfully ==>', apiData);
        }
    };

    // ==============
    const [limitTimes, setLimitTimes] = useState(false);
    const [limitNumber, setLimitNumber] = useState();
    const [limitPerUser, setLimitPerUser] = useState();
    const [discountVis, setDiscountVis] = useState(true);
    const [minPurchase, setMinPurchase] = useState(true);

    const handleMinPurchaseVis = (bool) => {
        setMinPurchase(bool);
        setDiscountVis(bool);
    };

    const handleLimitTimes = (e) => {
        setLimitNumber(e.target.value);
        setLimitTimes(!limitTimes);
    };

    const handleLimitPerUser = () => {
        setLimitPerUser(!limitPerUser);
    };

    return (
        <>
            <form method="POST" className="data-container">
                <div>
                    <label htmlFor="coupon" className="block bold m-t3">
                        Coupon Name*
                    </label>
                    <input
                        type="text"
                        id="coupon"
                        name="couponName"
                        value={data.couponName}
                        onChange={handleInput}
                        className="input m-y3"
                        placeholder="Coupon Name"
                    />
                    {discountVis && (
                        <div className="discountContainer">
                            <label
                                htmlFor="discount"
                                className="block bold m-t3"
                            >
                                Discount Code*
                            </label>
                            <div>
                                <button className="btn-outline m-r3">
                                    Add Prefix
                                </button>
                                <input
                                    type="text"
                                    id="discount"
                                    name="couponCode"
                                    value={data.couponCode}
                                    onChange={handleInput}
                                    className="input m-y3 m-r3"
                                    placeholder="Add Code"
                                />
                                <button className="bold btn">Generate</button>
                            </div>
                        </div>
                    )}
                    <div className="tnc">
                        <label htmlFor="tnc" className="block bold">
                            Coupon Terms and Conditions*
                        </label>
                        <textarea
                            name="termsAndConditions"
                            className="input m-y3"
                            placeholder="Terms and Conditions"
                            id="tnc"
                            value={data.termsAndConditions}
                            onChange={handleInput}
                            cols="30"
                            rows="3"
                        ></textarea>
                    </div>
                    {/* ======= */}
                    <Dropdown
                        onHandleVisibility={handleMinPurchaseVis}
                        onData={data}
                        onInputVal={handleInput}
                    />
                    {/*======= */}

                    {/* ====*/}
                    <PurchaseType onData={data} onInputVal={handleInput} />

                    {/* ====*/}

                    {minPurchase && (
                        <MinimumPurchase
                            onData={data}
                            onInputVal={handleInput}
                        />
                    )}
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
                    {limitTimes ? (
                        <input
                            name="usageLimit"
                            type="number"
                            defaultValue="2000"
                            value={data.usageLimit}
                            onChange={handleInput}
                            min="0"
                            max="120"
                            className="block smallInp"
                            placeholder="enter a number"
                        />
                    ) : (
                        ""
                    )}

                    <div className="m-t3 m-b3">
                        <input
                            type="checkbox"
                            id="usage"
                            className="m-r3"
                            placeholder="Coupon Name"
                            name="isOncePerCustomer"
                            value={!limitPerUser}
                            onClick={handleLimitPerUser}
                            onChange={handleInput}
                        />

                        <label htmlFor="usage" className="m-b3">
                            Limit to one use per customer
                        </label>
                    </div>
                </div>
                {/* ===== */}
                <label htmlFor="startDate" className="bold m-r3 m-y3">
                    Select Start Date*
                </label>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={data.startDate}
                    onChange={handleInput}
                />

                <label htmlFor="startTime" className="bold m-l3 m-y3">
                    Select Start Time*
                </label>
                <input
                    type="time"
                    name="startTime"
                    id="startTime"
                    value={data.startTime}
                    onChange={handleInput}
                />

                <div className="m-y3">
                    <label htmlFor="setEndDate" className="bold m-y3">
                        <small>Set End Date</small>
                    </label>
                    <input type="checkbox" defaultChecked />
                </div>
                {/* ====== */}
                <label htmlFor="endDate" className="bold m-r3 m-y3">
                    Select End Date*
                </label>
                <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={data.endDate}
                    onChange={handleInput}
                />

                <label htmlFor="endTime" className="bold m-l3 m-y3">
                    Select End Time*
                </label>
                <input
                    type="time"
                    name="endTime"
                    id="endTime"
                    value={data.endTime}
                    onChange={handleInput}
                />
                {/* ===== */}
                <button
                    type="button"
                    className="btn block m-y3"
                    onClick={postData}
                >
                    <strong>Submit Form</strong>
                </button>
            </form>
        </>
    );
}

export default Form;
