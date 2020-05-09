import React from 'react'
import styled from 'styled-components';

import { Header, Footer } from '../Organisms'

const LoginTemplate = () => {

    const Section = styled.section`
        margin-top: 80px;
    `
    const Logo = styled.img`
        height: 200px;
        width: 200px;
        transition: all 0.2s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    `
    const logoImage = require('../../assets/images/logo.png')

    return (
        <div>
            <Header />
            <Section>
                <div style={{textAlign: 'center'}}>
                    <Logo src={logoImage} />
                    {/* <h3 style={{paddingTop: 40}}>LOGIN</h3> */}
                </div>
                
                <div className="row justify-content-center">
                    <form className='form col-10 col-md-6 col-lg-4' >
                        <label className='formLabel'>Username</label>
                        <input className='form-control' />
                        <label className='formLabel'>Password</label>
                        <input className='form-control' type="password" />
                        {/* <label className='formLabel'>Confirm Password</label>
                        <input className='form-control' type="password" /> */}
                        <button className='btn btn-block' style={{ marginTop: 30, fontSize: 22, backgroundColor: '#A5FAA5', color: '#282727' }} type="submit" value="Submit" >Login</button>
                    </form>
                </div>
            </Section>
            <Footer />
        </div>
    )


}

export default LoginTemplate