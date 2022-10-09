import React, { useState } from "react";

function FreeShipping() {
    const [countries, setCountries] = useState(false);
    // // var countryNames = ['India','japan','america','thailand','']
    // var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda",'India']

    const handleCountries = (e) => {
        if(e.target.value === 'selectCountries'){
            setCountries(true)
        }
        else if(e.target.value === 'allCountries'){
            setCountries(false)
        }
    }
    return (
        <>
            <label className="block m-y3">Countries</label>

            <div className="block m-t3">
                <input
                    type="radio"
                    id="allCountries"
                    name="countries"
                    className="m-r3"
                    value='allCountries'
                    onClick={handleCountries}
                />
                <label htmlFor="allCountries">All Countries</label>
            </div>
            <div className="block m-t3">
                <input
                    type="radio"
                    id="selectCountries"
                    name="countries"
                    className="m-r3"
                    value='selectCountries'
                    onClick={handleCountries}
                />
                <label htmlFor="selectCountries">Select Countries</label>
            </div>

            <datalist id="country_list">
            <option value="India"> India </option>{" "}
            <option value="America"> America </option>{" "}
            <option value="Japan"> Japan </option>{" "}
            <option value="Thailand"> Thailand </option>{" "}
            <option value="China"> China </option>{" "}
            <option value="Israel"> Israel </option>{" "}
            <option value="Iran"> Iran </option>{" "}
            <option value="England"> England </option>{" "}
            <option value="Australia"> Australia </option>{" "}
            <option value="Nepal"> Nepal </option>{" "}
            <option value="Bangladesh"> Bangladesh </option>{" "}
            
          </datalist>{" "}

            {countries? <div>
                <input list='country_list' className="input m-y3 list" placeholder="search country" />
                <button className="btn m-l3">Browse</button>
            </div> : ''}
        </>
    );
}

export default FreeShipping;
