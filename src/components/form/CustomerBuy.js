import React, {useState} from "react";
import CustomerGet from "./CustomerGet";
import ProductModal from "./ProductModal";

function CustomerBuy(props) {

    const [amtInp , setAmtInp] = useState(false)
    const [qtyField, setQtyField] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [modal, setModal] = useState()

    const handleMinAmtField= (e) => {
        if(e.target.value === 'Minimum purchase amount'){
            setAmtInp(true)
            setQtyField(false)
        }
        else if(e.target.value !== 'Minimum purchase amount'){
            setAmtInp(false)
            setQtyField(true)
        }

    }

    return (
        <>
            <label className="block bold m-y3">Customer buys*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="minCustbuy"
                    name="radio"
                    value='minimumQuantityOfItems'
                    className="m-r3"
                    onClick={handleMinAmtField}
                />
                <label htmlFor="minCustbuy">Minimun quantity of items</label>
            </div>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="puchaseAmt"
                    name="radio"
                    className="m-r3"
                    value='Minimum purchase amount'
                    onClick={handleMinAmtField}
                />
                <label htmlFor="puchaseAmt">Minimum Purchase amount ($)</label>

                {amtInp &&
                    <input
                        type="number"
                        className="block smallInp"
                        name="minimumPurchaseAmount"
                        placeholder="$ enter amount"
                        value={props.onData.miminimumPurchaseAmount}
                        onChange={props.onInputVal}
                    />
                }
            </div>

            {/* ==== */}
            {qtyField && <div>
                <label className="block m-y3">Quantity*</label>
                <input type="number" className="smallInp" name="minimumQuantityOfItems" value={props.onData.minimumQuantityOfItems}
                onChange={props.onInputVal} />
            </div>}

            <label htmlFor="itemCategory" className="block m-t3">
                Any items from
            </label>
            <select
                name="classification"
                id="itemCategory"
                className="input select m-y3"
            >
                <option value="products" selected>
                    Specific Products
                </option>
                {/* <option value="collection" selected>
                    Specific Collection
                </option> */}
            </select>

            <input type="text" className="input" placeholder="search products" />
            <button type="button" className="btn m-l3" onClick={()=>{ setShowModal(true)}}>Browse</button>

            <ProductModal
              onClose={()=>{ setShowModal(false)}}
              show={showModal}
              onData={props.onData}
              updateData={props.updateData}
              setProducts={props.setProducts}
              products={props.products}
              onInputVal={props.onInputVal}
            />
            {/* ==== */}

            <CustomerGet onData={props.onData} onInputVal={props.onInputVal} setProducts={props.setProducts} products={props.products}/>
        </>
    );
}

export default CustomerBuy;
