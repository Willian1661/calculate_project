import React from "react";

export default function Button(props) {
    return (
        <button className={`button ${props.htmlClass}`} data-value={props.data}>
            {props.children}
        </button>
    )
}