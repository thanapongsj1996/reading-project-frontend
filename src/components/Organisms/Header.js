import React from 'react'

// Styles
import styled from 'styled-components';
import color from '../../assets/styles/color'

// Components
import { HeaderIcon } from '../Atoms/Icon'

// Images
import bookImg from '../../assets/images/book.png'
import writeImg from '../../assets/images/write.png'
import contactImg from '../../assets/images/contact.png'
import userImg from '../../assets/images/user.png'

const Header = () => {

    const headerIcon = [
        { img: bookImg, to: '/login' },
        { img: writeImg, to: '/my-book/0123?title=this%20is%20title' },
        { img: contactImg, to: '/login' },
        { img: userImg, to: '/login' }
    ]

    const Header = styled.div`
        background-color: ${color.bg.green};
        color: ${color.text.black};
        height: 80px;
        box-shadow: 0px -111px 24px 110px rgba(0,0,0,0.75);
        text-align: center;
        padding-top: 15px;
    `

    return (
        <Header>
            <div class="container-fluid">
                <div class="w-100 d-flex justify-content-around">
                    {headerIcon.map((icon) => { return <HeaderIcon to={icon.to} src={icon.img} /> })}
                </div>
            </div>
        </Header>
    )
}

export default Header