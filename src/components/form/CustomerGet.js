import React, {useState} from 'react'

function CustomerGet() {

    const [maxOrder , setMaxOrder] = useState(false)

    
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
                    Specific collection
                </option>
            </select>

            <input type="text" className="input" placeholder="search products" />
            <button type='button' className="btn m-l3">Browse</button>
            {/* ==== */}

            <label className="block bold m-y3">At a discount value*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="free"
                    name="discountValue"
                    className="m-r3"
                />
                <label htmlFor="free">Free</label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="percentage"
                    name="discountValue"
                    className="m-r3"
                />
                <label htmlFor="percentage">Percentage</label>
            </div>
{/* ==== */}
            <input
                        type="checkbox"
                        id="oneTimePurchase"
                        className="m-r3 m-y3"
                        placeholder="Coupon Name"
                        onClick={handleOrderNum}
                    />

                    <label htmlFor="oneTimePurchase" className="">
                        Limit Number of times this cab be used in total
                    </label>
                    {maxOrder?<input type="number" className="block smallInp" />: ''}
    </>
  )
}

export default CustomerGet