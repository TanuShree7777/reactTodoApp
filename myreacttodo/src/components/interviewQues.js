import React, { useState } from 'react'

const InterviewQues = () => {
    const [state, setState] = useState([]);
    const data = [{ id: 10 }, { id: 20 }, { id: 30 }]
    const handleChange = (id) => {
        if (state.includes(id)) {
            let x = [...state]
            let index = x.indexOf(id)
            console.log(index, "index")
            x.splice(index, 1)
            setState(x)
        }
        else {
            setState([...state, id])
        }

    }
    return (
        <>
            <div className='container'>
                {data.map((item) => {
                    return (
                        <div style={{ backgroundColor: state.includes(item.id) ? "red" : "green", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                            <input type='checkbox' value={item.id} onChange={() => handleChange(item.id)} />
                            <p>{item.id}</p>
                        </div>
                    )



                })}
            </div >
        </>
    )
}

export default InterviewQues