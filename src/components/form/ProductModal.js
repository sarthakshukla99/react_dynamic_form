import React, { useEffect, useState } from "react";
import "./Modal.css";
const ProductModal = (props) => {
    // const [products, setProducts] = useState([]);
    const {products, setProducts} = props;
    const [checked, setChecked] = useState(true);


    const handleCheck = (e) => {
        setChecked(!checked);
        props.onInputVal();
    };

    const handleIds = (item) => {
        const _productIds = props.onData.productIds.slice()
        if(_productIds.includes(item.shopifyId)){
            const idIndex = _productIds.indexOf(item.shopifyId)
            _productIds.splice(idIndex, 1)
        }
        else{
            _productIds.push(item.shopifyId)
        }
        props.onInputVal({target:{name:"productIds", value: _productIds}})

    }

    const handleEntitledProductIds = (item) => {
        const _productIds = props.onData.entitledProductIds.slice()
        if(_productIds.includes(item.shopifyId)){
            const idIndex = _productIds.indexOf(item.shopifyId)
            _productIds.splice(idIndex, 1)
        }
        else{
            _productIds.push(item.shopifyId)
        }
        props.onInputVal({target:{name:"entitledProductIds", value: _productIds}})

    }

    const handleVariantIds = (variant) => {
        const _variantIds = props.onData.variantIds.slice()
        if(_variantIds.includes(variant.id)){
            const idIndex = _variantIds.indexOf(variant.id)
            _variantIds.splice(idIndex, 1)
        }
        else {
            _variantIds.push(variant.id)
        }
        // if(_variantIds.length > 0 && !props.onData.productIds.includes(variant.parentId)){
        //     handleIds({shopifyId: variant.parentId})
        // }
        props.onInputVal({target:{name:"variantIds", value: _variantIds}})
    }




    const handleEntitledVariantIds = (variant) => {
        const _variantIds = props.onData.entitledVariantIds.slice()
        if(_variantIds.includes(variant.id)){
            const idIndex = _variantIds.indexOf(variant.id)
            _variantIds.splice(idIndex, 1)
        }
        else{
            _variantIds.push(variant.id)
        }
        props.onInputVal({target:{name:"entitledVariantIds", value: _variantIds}})

    }

    let GET_PRODUCT =
        "https://demo-shopify-apis.frt.one/v1/couponspoc/products";

    // getting products
    async function getProducts() {
        const response = await fetch(GET_PRODUCT);
        const data = await response.json();

        // const items = data.message.map((item) => item.message)
        const result = data.data;
        // console.log(result);
        setProducts(result);
    }

    useEffect(() => {
        // call the function
        getProducts();
        console.log("products are ===>", products);
    }, []);

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Select Your Products</h2>
                    <hr />
                </div>
                <div className="modal-body">
                    <div className="productsInfo">
                        {products.map((item) => (
                            <div className="products_container" key={item.shopifyId}>
                                <div >
                                    <span>
                                        <input
                                            type="checkbox"
                                            name="productIds"
                                            id={item.shopifyId}
                                            checked = {props.isEntitled ? props.onData.entitledProductIds.indexOf(item.shopifyId) !== -1 : props.onData.productIds.indexOf(item.shopifyId) !== -1}
                                            className="check"
                                            value={item.shopifyId}
                                            onChange={()=>{
                                                if(props.isEntitled){handleEntitledProductIds(item)}
                                                else{ handleIds(item)}}}
                                        />

                                        <label
                                            htmlFor="product_type"
                                            className="h3 m-l3"
                                        >
                                            {item.title}
                                        </label>
                                        <span className="m-l3">
                                            - {item.vendor}
                                        </span>
                                    </span>
                                </div>
                                {item.variants.map((variant) => (
                                    <>
                                        <hr />
                                        <input
                                            type="checkbox"
                                            name="variantIds"
                                            id={variant.id}
                                            checked = {props.isEntitled ? props.onData.entitledVariantIds.indexOf(variant.id) !== -1 : props.onData.variantIds.indexOf(variant.id) !== -1}
                                            className="check m-l5"
                                            value={variant.id}
                                            // onChange={()=>handleVariantIds(variant)}

                                            onChange={()=>{
                                                if(props.isEntitled){handleEntitledVariantIds({...variant, parentId: item.shopifyId})}
                                                else{ handleVariantIds({...variant,parentId: item.shopifyId})}}}
                                        />

                                        <label
                                            htmlFor={variant.id}
                                            className="h4 m-l3"
                                        >
                                            {variant.title}
                                        </label>

                                        <hr />
                                        <input
                                            type="hidden"
                                            name="variantsPrice"
                                            id={variant.id}
                                            className="check "
                                        />
                                        <label
                                            htmlFor={variant.id}
                                            className="h5 m-l12"
                                        >
                                            {variant.price}
                                        </label>
                                    </>
                                ))}
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
export default ProductModal;
