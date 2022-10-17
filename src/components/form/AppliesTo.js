import React, {useState} from "react";
import CollectionModal from "./CollectionModal";
import ProductModal from "./ProductModal";

function AppliesTo(props) {

    const [showModal, setShowModal] = useState(false)
    const [productModal, setProductModal] = useState(false)
    const [showBrowse, setShowBrowse] = useState()

    // const handleBtn = (e) => {
    //     if(e.target.value === 'all'){
    //         setShowBrowse(false)
    //     }
    //     else{
    //         setShowBrowse(true)
            
    //     }
    // }

    const handleModal = (e) => {
        if(e.target.value === '1'){
            setProductModal(false)
            setShowBrowse(true)
        }
        else if(e.target.value === '2'){
            setProductModal(true)
            setShowBrowse(true)
        }
        else if(e.target.value === '0'){
            setProductModal(false)
            setShowBrowse(false)

        }
    }

    return (
        <div>
            <label className="block bold m-y3">Applies To</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="applyAll"
                    name="appliesTo"
                    value="0"
                    // onChange={props.onInputVal}
                    onClick={handleModal}
                    className="m-r3"
                />
                <label htmlFor="applyAll">All</label>
            </div>
            <div className="block m-t3">
                <input
                    type="radio"
                    id="specificColl"
                    name="appliesTo"
                    value="1"
                    // onChange={props.onInputVal}
                    onClick={handleModal}
                    className="m-r3"
                />
                <label htmlFor="specificColl">Specific Collection</label>
            </div>
            <div className="block m-t3">
                <input
                    type="radio"
                    id="specificProduct"
                    name="appliesTo"
                    value="2"
                    // onChange={props.onInputVal}
                    onClick={handleModal}
                    className="m-r3"
                />
                <label htmlFor="specificProduct">Specific Products</label>
            </div>

            {showBrowse && <>
                <input list='collection_list' className="input m-y3 list" placeholder="search collection" />
                  <button type="button" className="btn m-l3" onClick={()=>{ setShowModal(true)}}>Browse</button>
            </>}

            {productModal && <ProductModal onClose={()=>{ setShowModal(false)}} show={showModal} onData={props.onData} onInputVal={props.onInputVal} setProducts={props.setProducts}
            products={props.products}/>}

            {!productModal &&<CollectionModal onClose={()=>{ setShowModal(false)}} show={showModal} onData={props.onData} onInputVal={props.onInputVal}/>}
        </div>
    );
}

export default AppliesTo;
