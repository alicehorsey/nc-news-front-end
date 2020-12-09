import React from 'react';
import Vote from "./Vote"

const CommentCard = ({ comment }) => {
    const { author, body, created_at, comment_id, votes } = comment

    return (
        < li className="comment-card" >
            <h4>{author}</h4 >
            <p>{body}</p >
            <p>Published: {created_at}</p>
            <Vote name="comment" id={comment_id} vote={votes} />
        </li >
    );
};

export default CommentCard;