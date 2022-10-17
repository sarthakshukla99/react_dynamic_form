import React, { useEffect, useState } from "react";
import AppliesTo from "./AppliesTo";
import CustomerEligibility from "./CustomerEligibility";
import Dropdown from "./Dropdown";
import "./Form.css";
import MinimumPurchase from "./MinimumPurchase";
import PurchaseType from "./PurchaseType";
import lodash from 'lodash'

function Form() {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState({
        couponClassification: "",
        couponMonetaryValue: 100,
        couponName: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        customerIds: [],
        isOncePerCustomer: "false",
        usageLimit: "",
        countryIds: [468906901762],
        allocationLimit: "",
        valueType: "",
        minimumQuantityOfItems: "",
        minimumPurchaseAmount: "",
        entitledCollectionIds: [],
        entitledProductIds: [],
        entitledVariantIds: [],
        productIds: [],
        variantIds: [],
        termsAndConditions: "",
        entitledQuantity: 1,
        couponCode: "",
        purchaseType: "",
    });

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        if(e.target.name === 'minimumPurchaseAmount'){
            setData({...data, minimumQuantityOfItems: "",[name]:value})
            return 
        }
        else if(e.target.name === 'minimumQuantityOfItems'){
            setData({...data, minimumPurchaseAmount: "",[name]:value})
            return 
        }

        if(e.target.name === 'entitledCollectionIds'){
            setData({...data, productIds: [],[name]:value})
            return 
        }
        else if(e.target.name === 'productIds'){
            setData({...data, entitledCollectionIds: [],[name]:value})
            return 
        }

        if(data.valueType === 'free'){
            setData({...data, couponMonetaryValue: 100,[name]:value})
            return 
        }

        console.log(e.target.name, e.target.checked);
        if(e.target.name === 'allocationBox' && !e.target.checked){
            setData({...data, allocationLimit: '',[name]:value})
            return 
        }
        
        


        setData({ ...data, [name]: value });
    };

    const updateData = (_data) => {
      setData({...data, ..._data});
    }

    useEffect(() => {
        setData({...data, productIds: [], variantIds: [], entitledProductIds: [], entitledVariantIds: [], entitledCollectionIds: [], minimumPurchaseAmount: "",
        minimumQuantityOfItems: ""})
    }, [data.couponClassification])

    // if(data.minimumPurchaseAmount !== null || ""){
    //     setData({...data, minimumQuantityOfItems: ""})
    // }
    // else if(data.minimumQuantityOfItems !== null || ""){
    //     setData({...data, minimumPurchaseAmount: ""})
    // }

    // ======= api integration=========
    const postData = async (e) => {
        e.preventDefault();
        let {
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
            entitledProductIds,
            entitledVariantIds,
            productIds,
            variantIds,
            termsAndConditions,
            entitledQuantity,
            couponCode,
            purchaseType,
        } = data;

        let API_URL =
            "https://demo-shopify-apis.frt.one/v1/couponspoc/save/details/indbAndShopify";

        couponClassification = parseInt(couponClassification);
        couponMonetaryValue = parseInt(couponMonetaryValue);
        usageLimit = parseInt(usageLimit) || null;
        allocationLimit = parseInt(allocationLimit) || null;
        minimumPurchaseAmount = parseInt(minimumPurchaseAmount) || null;
        minimumQuantityOfItems = parseInt(minimumQuantityOfItems) || null;
        purchaseType = parseInt(purchaseType);

        entitledProductIds = entitledProductIds.length > 0 ? entitledProductIds : null
        entitledVariantIds = entitledVariantIds.length > 0 ? entitledVariantIds : null
        entitledCollectionIds = entitledCollectionIds.length > 0 ? entitledCollectionIds : null
        customerIds = customerIds.length > 0 ? customerIds : null
        productIds = productIds.length > 0 ? productIds : []


        // variantIds = variantIds.length > 0 ? variantIds : null
        if(variantIds.length > 0) {
          let _variantIds = [];
          const _products = productIds.map(item => products.find(_item => _item.shopifyId == item));
          _products.map(prod => {
            const productId = prod.shopifyId;
            const product = prod;
            const _variants = product.variants.slice().map(item => item.id);
            const common = lodash.intersection(variantIds, _variants);
            if(common.length === _variants.length) {
              variantIds = lodash.remove(variantIds, (n) => common.includes(n));
            } else {
              productIds.splice(productIds.indexOf(productId), 1);
            }
          })
          // variantIds = _variantIds.slice();
        } else {
          variantIds = null;
        }

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
            entitledProductIds,
            entitledVariantIds,
            productIds,
            variantIds,
            couponCode,
            termsAndConditions,
            entitledQuantity,
            purchaseType,
        };

        // console.log(userData);

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const apiData = await response.json();

        if (!apiData) {
            window.alert("something went wrong");
            console.log("something went wrong");
        } else {
            window.alert("submitted successfully");
            console.log("submitted successfully ==>", apiData);
        }
    };


    // ==============
    const [limitTimes, setLimitTimes] = useState(false);
    const [limitNumber, setLimitNumber] = useState();
    const [limitPerUser, setLimitPerUser] = useState(false);
    const [discountVis, setDiscountVis] = useState(true);
    const [minPurchase, setMinPurchase] = useState(true);
    const [applyToField, setApplyToField] = useState(false)
    const [Discountcode , setDiscountcode] = useState("")

    const handleApplyField = (bool) => {
        setApplyToField(bool)
    }

    const generateCode = (e) => {
        e.preventDefault();
        setDiscountcode(Math.random().toString(36).slice(2));

        // let newState = {...data};
        // newState.couponCode = Discountcode

        // setData((previousData) =>
        //     {return {...previousData , couponCode : Discountcode}})

        setData({...data, couponCode: Math.random().toString(36).slice(2)})
    };

    const addPrefix = (e) => {
        if(data.couponCode ){
            setData({...data, couponCode: "SHO-"+ data.couponCode })
        }
        console.log(Discountcode);
    }




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
{/* ============== discount code ========= */}
                    <div className="discountContainer">
                        <label htmlFor="discount" className="block bold m-t3">
                            Discount Code*
                        </label>
                        <div>
                            <button type="button" className="btn-outline m-r3" onClick={addPrefix}>
                                Add Prefix
                            </button>
                            <input
                                type="text"
                                id="discount"
                                name="couponCode"
                                value={data.couponCode}
                                // value={Discountcode}
                                onChange={handleInput}
                                className="input m-y3 m-r3"
                                placeholder="Add Code"
                            />
                            <button className="bold btn" onClick={generateCode} >Generate</button>
                        </div>
                    </div>
{/* =========== */}
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
                        updateData={updateData}
                        setProducts={setProducts}
                        products={products}
                        onHandleApplyTo={handleApplyField}
                    />
                    {/*======= */}

                    {/* ====*/}
                    <PurchaseType onData={data} onInputVal={handleInput} />
                    {/* ====== */}

                    {applyToField && <AppliesTo onData={data} onInputVal={handleInput}
                      setProducts={setProducts}
                      products={products}
                    />}

                    {/* ====== */}
                    <CustomerEligibility onData={data} onInputVal={handleInput}/>
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
