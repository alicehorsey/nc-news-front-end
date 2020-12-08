import React, { Component } from 'react';
import { getArticles } from '../api'
import ArticleCard from './ArticleCard'
import FilterBar from './FilterBar'


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
        const { articles } = this.state
        const { topic_name } = this.props
        return (
            <main>
                <h2>{topic_name ? topic_name : "All your favourite articles in one place!"}</h2>
                <FilterBar topicOption={topic_name} />
                <ul className="articles-list">
                    {articles.map((article) => {
                        return (
                            <ArticleCard
                                key={article.article_id}
                                article={article}
                            />
                        );
                    })}
                </ul>
            </main>
        );
    }
}

export default ArticlesList;