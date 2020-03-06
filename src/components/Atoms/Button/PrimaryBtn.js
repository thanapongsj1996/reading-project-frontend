import React from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const PrimaryBtn = (props) => {

    const { title } = props

    const onBtnClick = () => {
        props.onBtnClick()
    }

    // const Button = styled.button`
    //     background-color: white;
    //     color: blue;
    //     border: 2px solid blue;
    // `;

    return <Button icon={<SearchOutlined />} onClick={onBtnClick} type="primary">{title}</Button>
}

export default PrimaryBtn