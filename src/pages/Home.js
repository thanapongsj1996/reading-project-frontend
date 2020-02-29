import React, { useState } from 'react'
import { Button } from 'antd'

const Home = () => {

    const [number, setNumber] = useState(0)

    const addNumber = () => {
        setNumber(number + 1)
    }

    const clearNumber = () => {
        setNumber(0)
    }

    return (
        <div style={{ textAlign: "center", marginTop: 400 }}>
            <h3 className="myStyle">Hello Reading Project!</h3>
            <p>{number}</p>

            <div><Button onClick={addNumber} type="primary">ADD</Button></div>
            <div><Button onClick={clearNumber} type="danger">CLEAR</Button></div>

        </div>

    )
}

export default Home