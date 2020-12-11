import React, { Component } from 'react';
import { getSingleArticle } from '../api'
import { Link } from "@reach/router"
import Loading from "./Loading"
import CommentsList from "./CommentsList"
import Vote from "./Vote"
import { formatDate } from "../utils/utils"


class SingleArticle extends Component {

    state = {
        article: {},
        isLoading: true,
        hasError: false,
        errorMessage: ""
    }

    componentDidMount = () => {
        const { article_id } = this.props
        getSingleArticle(article_id).then(article => {
            this.setState({ article, isLoading: false })
        }).catch((err) => {
            const { response: { status, statusText } } = err
            this.setState({ isLoading: false, hasError: true, errorMessage: `Oh no! Status ${status}, ${statusText}` }
            )
        })
    }

    render() {
        const { author, body, comment_count, created_at, title, topic, votes } = this.state.article
        const { isLoading, hasError, errorMessage } = this.state
        const { article_id, username } = this.props

        if (isLoading) {
            return <Loading />
        } else if (hasError) {
            return <h2>{errorMessage}</h2>
        } else {
            return (
                <div className="single-article">
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                    <p>{body}</p>
                    <p>Published: {formatDate(created_at)}</p>
                    <Vote name="article" id={article_id} vote={votes} />
                    <p>Comments: {comment_count}</p>
                    <CommentsList article_id={article_id} username={username} />
                    <p>Like what you see? View more articles like this one at <Link className="sentence-link" to={`/topics/${topic}`}>{topic}!</Link></p>
                </div >
            );
        }
    }
}

export default SingleArticle;