import React, {useState} from 'react'
import ProductModal from './ProductModal'

function CustomerGet(props) {

    const [maxOrder , setMaxOrder] = useState(false)
    const [percentageFied, setPercentageField] = useState()
    const [showModal, setShowModal] = useState(false)

    const handlePercentageField = (e) => {
        if(e.target.value === "percentage"){
            setPercentageField(true)
        }
        else{
            setPercentageField(false)

        }
    }

    const handleOrderNum= () => {
        setMaxOrder(!maxOrder)
    }

  return (
    <>
        <label className="block bold m-t3">Customer Gets*</label>
        <small>Customer must add the quantity of the items specified below to their cart for getting benefits of this coupon</small>

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
                    Specific Products
                </option>
            </select>

            <input type="text" className="input" placeholder="search products" />
            <button type="button" className="btn m-l3" onClick={()=>{ setShowModal(true)}}>Browse</button>

            <ProductModal onClose={()=>{ setShowModal(false)}} show={showModal} onData={props.onData} isEntitled={true}
                setProducts={props.setProducts}
                products={props.products}
                onInputVal={props.onInputVal} />
            {/* ==== */}

            <label className="block bold m-y3">At a discount value*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="free"
                    name="valueType"
                    className="m-r3"
                    value='free'
                    onChange={props.onInputVal}
                    onClick={handlePercentageField}
                />
                <label htmlFor="free">Free</label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="percentage"
                    name="valueType"
                    value='percentage'
                    className="m-r3"
                    onChange={props.onInputVal}
                    onClick={handlePercentageField}
                />
                <label htmlFor="percentage">Percentage</label>

                {percentageFied && <div>
                    <input
                            type="number"
                            id="monetary"
                            className="input m-y3 block"
                            placeholder="Coupon Monetary value"
                            name="couponMonetaryValue"
                            value={props.onData.couponMonetaryValue}
                            onChange={props.onInputVal}
                        />
                </div>}
            </div>
{/* ==== */}
            <input
                        type="checkbox"
                        id="oneTimePurchase"
                        name='allocationBox'
                        className="m-r3 m-y3"
                        onClick={handleOrderNum}
                        onChange={props.onInputVal}
                    />

                    <label htmlFor="oneTimePurchase" className="">
                        Set a maximum number of uses per order
                    </label>
                    {maxOrder?<input type="number" name='allocationLimit' value={props.onData.allocationLimit} className="block smallInp" onChange={props.onInputVal} />: ''}
    </>
  )
}

export default CustomerGet
