import React, { Component } from 'react';
import { getSingleArticle } from '../api'
import { Link } from "@reach/router"
import Loading from "./Loading"

class SingleArticle extends Component {

    state = {
        article: {},
        isLoading: true
    }

    componentDidMount = () => {
        const { article_id } = this.props
        getSingleArticle(article_id).then(article => {
            console.log(article, "in single article")
            this.setState({ article, isLoading: false })
        })
    }


    render() {
        const { author, body, comment_count, created_at, title, topic, votes } = this.state.article
        const { isLoading } = this.state

        if (isLoading) return <Loading />
        return (
            <div className="single-article">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{body}</p>
                <p>Published: {created_at}</p>
                <p>Votes: {votes}</p>
                <p>Comments: {comment_count}</p>
                <p></p>
                <p>Like what you see? View more articles like this one at <Link to={`/topics/${topic}`}>{topic}!</Link></p>
            </div >
        );
    }
}

export default SingleArticle;