import React from 'react'

// Styles
import styled from 'styled-components';
import color from '../../assets/styles/color'

const Profile = (props) => {

    const { role } = props

    const UserImg = styled.img`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
    `

    const Role = styled.span`
        color: ${color.text.light_gray};
        font-size: 13px;
    `

    return (
        <div class="d-flex">
            <UserImg src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="..." class="rounded-circle" />
            <div class="ml-2">
                <span>Thanapong Somjai</span><br />
                <Role>{role}</Role>
            </div>
        </div>
    )
}

export default Profile