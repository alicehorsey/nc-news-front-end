import React, { Component } from 'react';
import CommentsLoading from './CommentsLoading'
import { getComments, postComment, deleteComment } from "../api"
import CommentCard from './CommentCard';
import AddCommentForm from "./AddCommentForm"


class CommentsList extends Component {
    state = {
        comments: [],
        isLoading: true,
        hasError: false,
        errorMessage: ""
    }

    componentDidMount = () => {
        const { article_id } = this.props
        getComments(article_id).then((comments) => {
            this.setState({ comments, isLoading: false })
        })
    }

    addComment = (commentToPost) => {
        const { article_id } = this.props
        postComment(article_id, commentToPost).then((newComment) => {
            this.setState((currentState) => {
                return { comments: [newComment, ...currentState.comments] }
            })
        })
    }

    removeComment = (comment_id) => {
        deleteComment(comment_id)
        this.setState((currentState) => {
            const newState = currentState.comments.filter(comment => comment.comment_id !== +comment_id)
            return {
                comments: newState
            }
        })
    }

    render() {
        const { comments, isLoading } = this.state

        if (isLoading) return <CommentsLoading />
        return (
            <main>
                <p>Add Comment: </p>
                <AddCommentForm addComment={this.addComment} />
                <p>Comments:</p>
                <ul className="comments-list">
                    {comments.map((comment) => {
                        return (
                            <CommentCard key={comment.comment_id} comment={comment} removeComment={this.removeComment} />
                        )
                    })}
                </ul>

            </main>
        );
    }
}

export default CommentsList;