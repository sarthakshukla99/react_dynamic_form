import React, {useState} from "react";
import CustomerModal from "./CustomerModal";

function CustomerEligibility(props) {
    const [showModal, setShowModal] = useState(false)
    const [showBtn, setShowBtn] = useState(false)

    const handleShowBtn = (e) => {
        if(e.target.value === 'allCustomer'){
            setShowBtn(false)
        }
        else{
            setShowBtn(true)
        }
    }

    return (
        <div>
            <label className="block bold m-y3">Customer Eligibility*</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="allCustomer"
                    name="Eligibility"
                    value="allCustomer"
                    // onChange={props.onInputVal}
                    className="m-r3"
                    onClick={handleShowBtn}
                />
                <label htmlFor="allCustomer">All Customers</label>
            </div>
            {/* <div className="block m-t3">
                <input
                    type="radio"
                    id="customerSegment"
                    name="Eligibility"
                    value="Eligibility"
                    // onChange={props.onInputVal}
                    className="m-r3"
                />
                <label htmlFor="customerSegment">Specific Customer segments</label>
            </div> */}
            <div className="block m-t3">
                <input
                    type="radio"
                    id="specificCustomer"
                    name="Eligibility"
                    value="Specific"
                    // onChange={props.onInputVal}
                    className="m-r3"
                    onClick={handleShowBtn}
                />
                <label htmlFor="specificCustomer"> Specific Customers </label>
            </div>

            {showBtn && <button type="button" className="btn m-l3 m-t3" onClick={()=>{ setShowModal(true)}}>Browse</button>}
            
            <CustomerModal onClose={()=>{ setShowModal(false)}} show={showModal} onData={props.onData} onInputVal={props.onInputVal}/>
            
        </div>
    );
}

export default CustomerEligibility;
