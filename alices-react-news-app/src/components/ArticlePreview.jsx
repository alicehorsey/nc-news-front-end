import React, { Component } from 'react';
import { getSingleArticle } from '../api'
import Loading from "./Loading"

class ArticlePreview extends Component {
    state = {
        articlePreview: {},
        isLoading: true,
        hasError: false,
        errorMessage: ""
    }

    componentDidMount = () => {
        const { article_id } = this.props
        getSingleArticle(article_id).then(article => {
            const preview = article.body.split(" ").slice(0, 51).join(" ") + "..."
            this.setState({ articlePreview: preview, isLoading: false })
        }).catch((err) => {
            this.setState({ isLoading: false, hasError: true, errorMessage: `Oh no! Article preview unavailable.` }
            )
        })
    }

    render() {
        console.log(this.props)
        const { isLoading, hasError, errorMessage } = this.state

        if (isLoading) {
            return <Loading />
        } else if (hasError) {
            return <h2>{errorMessage}</h2>
        } else {
            return (
                <div className="article-preview">
                    <p>{this.state.articlePreview}</p>
                </div>
            );
        }
    }
}
export default ArticlePreview;

