import React, { useEffect, useState } from "react";
import "./Modal.css";

const CustomerModal = (props) => {
    const [customer, setCustomer] = useState([]);
    const [checked, setChecked] = useState(true);


    const handleCheck = (e) => {
        setChecked(!checked);
        props.onInputVal();
    };

    const handleIds = (item) => {
        const _customerIds = props.onData.customerIds.slice()
        if(_customerIds.includes(item.shopifyId)){
            const idIndex = _customerIds.indexOf(item.shopifyId)
            _customerIds.splice(idIndex, 1)
        }
        else{
            _customerIds.push(item.shopifyId)
        }
        console.log(_customerIds);
        props.onInputVal({target:{name:"customerIds", value: _customerIds}})

    }


    let GET_CUSTOMERS =
        "https://demo-shopify-apis.frt.one/v1/couponspoc/customers?email=907";

    // getting products
    async function getCustomers() {
        const response = await fetch(GET_CUSTOMERS);
        const data = await response.json();

        const result = data.data;
        // console.log(result);
        setCustomer(result);
    }

    useEffect(() => {
        // call the function
        getCustomers();
        // console.log("products are ===>", products);
    }, []);

    if (!props.show) {
        return null;
    }

    console.log('ID===>',props.onData.customerIds);

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Select User</h2>
                    <hr />
                </div>
                <div className="modal-body">
                    <div className="productsInfo">
                        {customer.map((item) => (
                            <div className="products_container" key={item.shopifyId}>
                                <div >
                                    <span>
                                        <input
                                            type="checkbox"
                                            name="customerIds"
                                            id={item.shopifyId}
                                            checked = {props.onData.customerIds.indexOf(item.shopifyId) !== -1}
                                            className="check"
                                            value={item.shopifyId}
                                            onChange={()=>{ handleIds(item)}}
                                        />

                                        <label
                                            htmlFor="product_tye"
                                            className="h3 m-l3"
                                        >
                                            {item.first_name}
                                        </label>

                                    </span>
                                </div>
                                
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button
                            className="button btn-white"
                            onClick={props.onClose}
                        >
                            <strong>Close</strong>
                        </button>
                        <button
                            className="button btn-grey"
                            onClick={props.onClose}
                        >
                            <strong>Save</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CustomerModal;