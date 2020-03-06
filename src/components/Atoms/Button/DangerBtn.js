import React from 'react'
import { Button } from 'antd'

const DangerBtn = (props) => {

    const { title } = props

    const onBtnClick = () => {
        props.onBtnClick()
    }

    return <Button type="danger" onClick={onBtnClick}>{title}</Button>
}

export default DangerBtn