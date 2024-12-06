import React from 'react'

function StepTwo(props) {
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
        <div className='form' id='step2'>
            <label htmlFor='model'>Model:</label>
            <input type='text' id='model' name='model'
                value={props.formData.model}
                onChange={handleChange}
            />
            <label htmlFor='car_price'>Price:</label>
            <input type='text' id='car_price' name='car_price'
                value={props.formData.car_price}
                onChange={handleChange}
            />
            
            <div style={design}>
                <button onClick={props.prevStep}>Prev</button>
                <button onClick={props.nextStep}>Next</button>
            </div>
        </div>
    )
}

export default StepTwo