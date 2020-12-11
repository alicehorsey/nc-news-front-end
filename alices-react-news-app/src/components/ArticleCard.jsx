import React from 'react';
import { Link } from '@reach/router'
import { formatDate } from "../utils/utils"
import ArticlePreview from "./ArticlePreview"

const ArticleCard = ({ article }) => {

    return (
        <Link className="article-card" to={`/article/${article.article_id}`}>
            < li >
                <h3>{article.title}</h3 >
                <h4>{article.author}</h4 >
                <div className="card-content">
                    <div className="card-details">
                        <p>Created: {formatDate(article.created_at)}</p>
                        <p>Comments: {article.comment_count}</p>
                        <p>Votes: {article.votes}</p>
                    </div>
                    <ArticlePreview article_id={article.article_id} />
                </div>
            </li >
        </Link>
    );
};

export default ArticleCard;