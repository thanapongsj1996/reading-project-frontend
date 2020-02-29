import React from 'react'
import queryString from 'query-string'

const Login = (props) => {

    const uid = props.match.params.uid
    const query = queryString.parse(props.location.search)

    return (
        <div>
            <div>Login to Reading Project! {uid}</div>
            <small>:: {query.title} ::</small>
        </div>
    )
}

export default Login