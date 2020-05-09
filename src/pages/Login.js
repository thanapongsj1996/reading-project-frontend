import React from 'react'
import queryString from 'query-string'

import { LoginTemplate } from '../components/Templates'

const Login = (props) => {

    const uid = props.match.params.uid
    const query = queryString.parse(props.location.search)

    return <LoginTemplate />
}

export default Login