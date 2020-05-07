import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styled from 'styled-components';

const HeaderIcon = (props) => {

    const { to, src } = props

    const Logo = styled.img`
        height: 50px;
        width: 50px;
        transition: all 0.2s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    `

    return (
        <Link to={to}><Logo src={src} /></Link>
    )
}

export default HeaderIcon