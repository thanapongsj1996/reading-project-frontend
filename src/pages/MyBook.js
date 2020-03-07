import React from 'react'
import queryString from 'query-string'

const MyBook = (props) => {

    const uid = props.match.params.uid
    const query = queryString.parse(props.location.search)

    return (
        <div>
            <div>All Books I Wrote! {uid}</div>
            <small>:: {query.title} ::</small>
        </div>
    )
}

export default MyBook