import React from 'react'

const CheckBox = (props) => {

    const { value, label } = props

    const onCheck = () => {
        props.onCheck()
    }

    return (
        <div>
            <input onInput={onCheck} type="checkbox" class="mr-2" value={value} />
            <label>{label}</label>
        </div>
    )

}

export default CheckBox
