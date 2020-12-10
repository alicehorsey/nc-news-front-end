import React, { Component } from 'react';
import CommentsLoading from './CommentsLoading'
import { getComments, postComment, deleteComment } from "../api"
import CommentCard from './CommentCard';
import AddCommentForm from "./AddCommentForm"



class CommentsList extends Component {
    state = {
        comments: [],
        isLoading: true
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
            const newState = currentState.comments.filter(comment => {
                if (comment.comment_id !== +comment_id) {
                    return comment
                }
            })
            console.log(newState, "newState")
            return {
                comments: newState
            }
        })

    }

    render() {
        const { comments, isLoading } = this.state
        console.log(comments, "in render")

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


//comment example object -
// author: "happyamy2016"
// body: "Neque dolor sint illum id consequuntur debitis qui nam eum. Nam adipisci similique consequatur officiis. Totam qui enim at iste dolorem ullam. Tenetur laudantium sed facilis aspernatur occaecati. Provident rerum quia consectetur et. Molestiae eligendi commodi."
// comment_id: 115
// created_at: "2018-01-19T14:47:14.514Z"
// votes: 12


export default CommentsList;