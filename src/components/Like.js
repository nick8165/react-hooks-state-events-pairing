import React, { useState } from "react"

function Like({upvotes, downvotes}) {
    const [like, setLike] = useState(upvotes)
    const [dislike, setDislike] = useState(downvotes)
    
    function handleUpClick() {
        setLike(like + 1)
    }

    function handleDownClick() {
        setDislike(dislike + 1)
    }

    return (
        <div>
            <button class="upvote" onClick={handleUpClick}>{like} likes</button>
            <button class="downvote" onClick={handleDownClick}>{dislike} dislikes</button>
        </div>
    )
}

export default Like