import React from 'react'

import styled from 'styled-components';
import color from '../../assets/styles/color'

import { CheckBox } from '../Atoms/Selector'

const Filter = () => {

    const onCheck = (data) => {
        alert(data)
    }

    const Title = styled.div`
        font-size: 15px;
        color: ${color.text.black};
        background-color: ${color.bg.light_green};
        padding: 8px;
        padding-left: 20px;
        border-radius: 10px;
    `
    const Icon = styled.img`
        width: 20px;
        height: 20px;
        margin-top: -4px;
        margin-right: 4px;
    `

    return (
        <div>
            <Title>
                <Icon src={require('../../assets/images/cate.png')} /> BOOK CATEGORIES
            </Title>
            <form class="px-4 py-3">
                <CheckBox onCheck={() => { onCheck('1') }} value="1" label="test" />
                <CheckBox onCheck={() => { onCheck('2') }} value="2" label="test2" />
                <CheckBox onCheck={() => { onCheck('3') }} value="3" label="test3" />
            </form>
        </div>
    )
}

export default Filter