import React, { useEffect, useState } from "react";
import "./Modal.css";

const CollectionModal = (props) => {
    const [collection, setCollection] = useState([]);
    const [checked, setChecked] = useState(true);


    const handleCheck = (e) => {
        setChecked(!checked);
        props.onInputVal();
    };

    const handleIds = (item) => {
        const _entitledCollectionIds = props.onData.entitledCollectionIds.slice()
        if(_entitledCollectionIds.includes(item.shopifyId)){
            const idIndex = _entitledCollectionIds.indexOf(item.shopifyId)
            _entitledCollectionIds.splice(idIndex, 1)
        }
        else{
            _entitledCollectionIds.push(item.shopifyId)
        }
        console.log(_entitledCollectionIds);
        props.onInputVal({target:{name:"entitledCollectionIds", value: _entitledCollectionIds}})

    }


    let GET_COLLECTION =
        "https://demo-shopify-apis.frt.one/v1/couponspoc/collections?title=home";

    // getting products
    async function getCollection() {
        const response = await fetch(GET_COLLECTION);
        const data = await response.json();

        const result = data.data;
        // console.log(result);
        setCollection(result);
    }

    useEffect(() => {
        // call the function
        getCollection();
        // console.log("products are ===>", products);
    }, []);

    if (!props.show) {
        return null;
    }

    console.log('ID===>',props.onData.entitledCollectionIds);

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Select Your Collection</h2>
                    <hr />
                </div>
                <div className="modal-body">
                    <div className="productsInfo">
                        {collection.map((item) => (
                            <div className="products_container" key={item.shopifyId}>
                                <div >
                                    <span>
                                        <input
                                            type="checkbox"
                                            name="entitledCollectionIds"
                                            id={item.shopifyId}
                                            checked = {props.onData.entitledCollectionIds.indexOf(item.shopifyId) !== -1}
                                            className="check"
                                            value={item.shopifyId}
                                            onChange={()=>{ handleIds(item)}}
                                        />

                                        <label
                                            htmlFor="product_type"
                                            className="h3 m-l3"
                                        >
                                            {item.title}
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
export default CollectionModal;