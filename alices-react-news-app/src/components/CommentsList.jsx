import React, { Component } from 'react';
import CommentsLoading from './CommentsLoading'
import { getComments } from "../api"
import CommentCard from './CommentCard';

class CommentsList extends Component {

    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount = () => {
        const { article_id } = this.props
        getComments(article_id).then((comments) => {
            console.log(comments, "in comments list")
            this.setState({ comments, isLoading: false })
        })
    }



    render() {
        // console.log(this.props.article_id)

        const { comments, isLoading } = this.state

        if (isLoading) return <CommentsLoading />
        return (
            <main>
                <ul className="comments-list">
                    {comments.map((comment) => {
                        return (
                            <CommentCard key={comment.comment_id} comment={comment} />
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