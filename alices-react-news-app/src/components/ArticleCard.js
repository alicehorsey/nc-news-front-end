import React from 'react';

const ArticleCard = ({ article }) => {

    return (
        <div>
            < li className="article-card" >
                <h3>{article.title}</h3 >
                <h4>{article.author}</h4 >
                <p>Created: {article.created_at}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
            </li >
        </div>
    );
};

export default ArticleCard;