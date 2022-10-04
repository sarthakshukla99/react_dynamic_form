import React, { useState } from 'react'
import Form from './Form';

function CreateForm() {
    const [formVisibility, setFormVisibility] = useState(false);

    const handleFormVisibility = () => {
        setFormVisibility(true);
    };

  return (
        <div>
        <Form/>
            {/* {formVisibility ? <Form/> : <button onClick={handleFormVisibility}>Create Form</button>} */}
        </div>
    )
}

export default CreateForm