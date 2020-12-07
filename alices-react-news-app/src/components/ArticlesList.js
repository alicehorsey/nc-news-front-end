import React, { Component } from 'react';
import { getArticles } from '../api'

class ArticlesList extends Component {
    state = {
        articles: []
    }

    componentDidMount = () => {
        const { topic_name } = this.props
        getArticles(topic_name).then((articles) => {
            this.setState({ articles })
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const newTopic = prevProps.topic_name !== this.props.topic_name;
        if (newTopic) {
            getArticles(this.props.topic_name).then((articles) => {
                this.setState({ articles })
            })
        }
    }

    render() {
        console.log(this.props)
        const { articles } = this.state

        return (
            <div className="articles-list">
                {articles.map((article) => {
                    return <li>{article.title}</li>
                })}
            </div>
        );
    }
}

export default ArticlesList;