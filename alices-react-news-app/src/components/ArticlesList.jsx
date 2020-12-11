import React, { Component } from 'react';
import { getArticles } from '../api'
import ArticleCard from './ArticleCard'
import FilterBar from './FilterBar'
import Loading from './Loading'


class ArticlesList extends Component {
    state = {
        articles: [],
        order: undefined, //<--- order: asc / desc
        sort_by: undefined, //<--- column: created_at / author / comment_count / votes
        isLoading: true,
        hasError: false,
        errorMessage: ""
    }

    componentDidMount = () => {
        const { topic_name } = this.props
        getArticles(topic_name).then((articles) => {
            this.setState({ articles, isLoading: false })
        }).catch((err) => {
            const { response: { status } } = err
            this.setState({ isLoading: false, hasError: true, errorMessage: `Oh no! Status ${status}, ${err.response.data.msg}` }
            )
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { order, sort_by } = this.state
        const { topic_name } = this.props
        const newTopic = prevProps.topic_name !== topic_name;
        const newOrder = prevState.order !== order;
        const newSortBy = prevState.sort_by !== sort_by;
        if (newTopic || newOrder || newSortBy) {
            // this.setState({ isLoading: true })
            getArticles(topic_name, order, sort_by).then((articles) => {
                this.setState({ articles, isLoading: false })
            })
                .catch((err) => {
                    const { response: { status, statusText } } = err
                    this.setState({ isLoading: false, hasError: true, errorMessage: `Oh no! Status ${status}, ${statusText}` }
                    )
                })
        }
    }

    updateFilter = (newOrder, newSort_by) => {
        console.log(newOrder, newSort_by, "<---articles list")
        this.setState({ order: newOrder, sort_by: newSort_by })
    }

    render() {
        const { articles, isLoading, hasError, errorMessage } = this.state
        const { topic_name } = this.props

        if (isLoading) {
            return <Loading />
        } else if (hasError) {
            return <h2>{errorMessage}</h2>
        } else {
            return (
                <main>
                    <h2>{topic_name ? topic_name : "All your favourite articles in one place!"}</h2>
                    <FilterBar changeFilter={this.updateFilter} />
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
}

export default ArticlesList;