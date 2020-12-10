import Vote from "./Vote"
import React, { Component } from 'react';
import { formatDate } from "../utils/utils"



class CommentCard extends Component {
    state = {
        isDisabled: false
    }

    handleClick = (event) => {
        const { removeComment } = this.props

        console.log(event.target.id)
        const comment_id = event.target.id
        console.log(comment_id)
        this.setState({ isDisabled: true })
        removeComment(comment_id)
    }

    render() {
        const { comment, deleteComment } = this.props
        const { author, body, created_at, comment_id, votes } = comment
        return (
            < li className="comment-card" >
                <h4>{author}</h4 >
                <p>{body}</p >
                <p>Published: {formatDate(created_at)}</p>
                <Vote name="comment" id={comment_id} vote={votes} />
                <button id={comment_id} onClick={this.handleClick} disabled={this.state.isDisabled}>Delete</button>
            </li >
        );
    }
};

export default CommentCard;