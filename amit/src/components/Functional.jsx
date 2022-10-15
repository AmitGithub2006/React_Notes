// stateless functional component

import React from 'react';

export function Functional (props) {
    return (
        <>
        <h1>The name is {props.name[1]}</h1>
        <p>para</p>
        <h2>Header</h2>
        </>
    )
}