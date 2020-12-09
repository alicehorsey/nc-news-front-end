import React from 'react';

const CommentCard = ({ comment }) => {

    return (
        < li className="comment-card" >
            <h4>{comment.author}</h4 >
            <p>{comment.body}</p >
            <p>Published: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
        </li >
    );
};

export default CommentCard;