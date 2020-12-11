import React, { Component } from 'react';
import CommentsLoading from './CommentsLoading'
import { getComments, postComment, deleteComment } from "../api"
import CommentCard from './CommentCard';
import AddCommentForm from "./AddCommentForm"
import CommentsFilterBar from './CommentsFilterBar';


class CommentsList extends Component {
    state = {
        comments: [],
        order: undefined, //<--- order: asc / desc
        sort_by: undefined, //<--- column: created_at / votes
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

    componentDidUpdate = (prevProps, prevState) => {
        const { order, sort_by } = this.state
        const { article_id } = this.props
        const newOrder = prevState.order !== order;
        const newSortBy = prevState.sort_by !== sort_by;
        if (newOrder || newSortBy) {
            getComments(article_id, order, sort_by).then((comments) => {
                this.setState({ comments, isLoading: false })
            })
        }
    }

    updateFilter = (newOrder, newSort_by) => {
        console.log(newOrder, newSort_by, "<---comments list")
        this.setState({ order: newOrder, sort_by: newSort_by })
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
                <CommentsFilterBar changeFilter={this.updateFilter} />
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