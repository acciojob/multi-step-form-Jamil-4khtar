import React, {useState} from 'react'

function StepOne(props) {
    const handleChange = (e) => {
        props.setFormData({
            ...props.formData, [e.target.id]: e.target.value
        });
        // console.log(props.formData);
        
    }
    let design = {
        position: "relative",
        left: "135px"
    }
    return (
        <div className='form'>
            <label htmlFor='first_name'>First Name:</label>
            <input type='text' id='first_name' name='first_name'
                value={props.formData.first_name}
                onChange={handleChange}
            />
            <label htmlFor='last_name'>Last Name:</label>
            <input type='text' id='last_name' name='last_name'
                value={props.formData.last_name}
                onChange={handleChange}
            />

            <button style={design} onClick={props.nextStep}>Next</button>
        </div>
    )
}

export default StepOne