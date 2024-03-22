import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'

const IQ2 = () => {
    const [userinput, setUserinput] = useState([{ firstName: '', lastName: '' }])
    const onSubmit = (values) => {
        console.log(values)
    }
    const handleInputChange = (index, event) => {
        console.log(index, event.target.value, "index")
        const values = [...userinput];
        // if (event.target.name === "fistName") {
        values[index][event.target.name] = event.target.value
        // }
        // else {
        //     values[index].lastName = event.target.value
        // }
        console.log(values)
        setUserinput(values)

    }

    const handleDelete = () => {

    }
    const handleAdd = () => {

    }
    return (
        <>
            <hi>Dynamic Input Field </hi>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Simple input field</h2>
                        {userinput.map((inputField, index) => (
                            <>
                                {console.log(inputField, "input")}
                                <div className='form-group col-sm-6'>
                                    <label>First Name</label>
                                    <Field
                                        name='firstName'
                                    >
                                        {({ input, meta }) => (
                                            <input
                                                {...input}
                                                className="form-control"
                                                name='firstName'
                                                component="input"
                                                placeholder="name"
                                                // value={inputField.firstName}
                                                onChange={event => {
                                                    input.onChange(event)
                                                    handleInputChange(index, event)
                                                }} />
                                        )}
                                    </Field>
                                </div>
                                <div className='form-group col-sm-6'>
                                    <label>Last Name</label>
                                    <Field
                                        className="form-control"
                                        name='lastName'
                                        component="input"
                                        placeholder="name"
                                        value={inputField.lastName}
                                    />
                                </div>
                                <div className='form-group col-sm-6'>
                                    <button type='button' onChange={() => { handleDelete() }}>-</button>
                                    <button type='button' onChange={() => { handleAdd() }}>+</button>
                                </div>
                            </>
                        ))}

                        <button type='submit'>Submit</button>
                    </form>
                )}
            />
        </>
    )
}

export default IQ2