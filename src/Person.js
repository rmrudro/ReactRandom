import React from 'react'
export default function Change(props) {
    return (
        <div>
            <h1>Hello , {props.name} {props.Lastname} </h1>
            <p>He is {props.age} year old</p>
        </div>
    )
}