import React, { Component } from 'react';
import { getSingleArticle } from '../api'
import { Link } from "@reach/router"

class SingleArticle extends Component {

    state = {
        article: {}
    }

    componentDidMount = () => {
        const { article_id } = this.props
        getSingleArticle(article_id).then(article => {
            console.log(article, "in single article")
            this.setState({ article })
        })
    }


    render() {
        const { author, body, comment_count, created_at, title, topic, votes } = this.state.article

        return (
            <div className="single-article">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{body}</p>
                <p>Published: {created_at}</p>
                <p>Votes: {votes}</p>
                <p>Comments: {comment_count}</p>
                <p>Like what you see? View more at <Link to={`/topics/${topic}`}>{topic}!</Link></p>
            </div >
        );
    }
}

export default SingleArticle;