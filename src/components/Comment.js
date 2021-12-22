import React, { useState } from "react"

function Comment(props) {

    const [hide, setHide] = useState(false)

    function handleHide() {
        setHide(!hide)
    }

    return (
        <div>
            <button class="hide" onClick={handleHide}>{hide ? "Show Comments" : "Hide Comments"}</button>
            {hide ? null : props.comments.map((item) => {return (<p>{item.user}<p>{item.comment}</p></p>)})}
        </div>
    )
}
export default Comment