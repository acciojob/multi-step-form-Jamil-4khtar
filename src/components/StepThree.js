import React from 'react'

function StepThree(props) {
    const handleChange = (e) => {
        props.setFormData({
            ...props.formData, [e.target.id]: e.target.value
        });
        // console.log(props.formData);
    }


    let design = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <div className='form'>
            <label htmlFor='card_info'>Card Info:</label>
            <input type='text' id='card_info' name='card_info'
                value={props.formData.card_info}
                onChange={handleChange}
            />
            <label htmlFor='expiry_date'>Expiry Date:</label>
            <input type='text' id='expiry_date' name='expiry_date'
                value={props.formData.expiry_date}
                onChange={handleChange}
            />

            <div style={design}>
                <button onClick={props.prevStep}>Prev</button>
                <button onClick={props.handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default StepThree