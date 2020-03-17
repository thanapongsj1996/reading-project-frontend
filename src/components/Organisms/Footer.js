import React from 'react'

// Styles
import styled from 'styled-components';
import color from '../../assets/styles/color'

const Footer = () => {

    const Footer = styled.footer`
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: ${color.bg.black};
        color: ${color.text.white};
        padding-top: 25px;
        padding-bottom: 25px;
        text-align: center;
    `

    return (
        <Footer>
            © 2020 Reading project - Made with <span role="img" aria-label="heart">❤️</span> by Thanapong Somjai
        </Footer>
    )

}

export default Footer