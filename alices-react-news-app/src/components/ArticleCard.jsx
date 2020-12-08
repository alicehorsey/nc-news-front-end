import React from 'react';
import { Link } from '@reach/router'

const ArticleCard = ({ article }) => {

    return (
        < div >
            <Link to={`/article/${article.article_id}`}>
                < li className="article-card" >
                    <h3>{article.title}</h3 >
                    <h4>{article.author}</h4 >
                    <p>Created: {article.created_at}</p>
                    <p>Comments: {article.comment_count}</p>
                    <p>Votes: {article.votes}</p>

                </li >
            </Link>
        </div >
    );
};

export default ArticleCard;