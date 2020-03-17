import React from 'react'

// Styles
import styled from 'styled-components';
import color from '../../assets/styles/color'

// Components
import { CheckBox } from '../Atoms/Selector'

const Filter = (props) => {

    const { title, choices } = props.filter

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
        text-transform: uppercase;
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
                <Icon src={require('../../assets/images/cate.png')} /> {title}
            </Title>
            <form class="px-4 py-3">
                {choices.map((choice) => {
                    return <CheckBox onCheck={() => { onCheck(choice.value) }} value={choice.value} label={choice.label} />
                })}
            </form>
        </div>
    )
}

export default Filter