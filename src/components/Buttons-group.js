import React from "react";

export default function ButtonsGroup(props) {
     return(
        <div id={props.groupsId} className={props.htmlClass}>
            {props.children}
        </div>
    )
}