import React, { useState } from "react"
import Like from "./Like.js"
import Comment from "./Comment.js"

function Video(props) {
    console.log(props.video.embedUrl)
    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={props.video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={props.video.title}
            />
            <h1>{props.video.title}</h1>
            <p>{props.video.views} views | {props.video.createdAt}</p>
            <Like upvotes={props.video.upvotes} downvotes={props.video.downvotes}/>
            <Comment comments={props.video.comments}/>
        </div>
    )
}

export default Video