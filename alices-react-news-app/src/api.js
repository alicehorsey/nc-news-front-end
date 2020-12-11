import axios from 'axios'

const alicesNewsAPI = axios.create({
    baseURL: 'https://alices-news-app.herokuapp.com/api',
})

export const getAllTopics = () => {
    return alicesNewsAPI.get('/topics').then(({ data }) => {
        return data.topics;
    })
}

export const getArticles = (topic_name, order, sort_by) => {
    return alicesNewsAPI.get('/articles', {
        params: {
            topic: topic_name,
            order: order,
            sort_by: sort_by,
            limit: 100
        }
    }).then(({ data }) => {
        return data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return alicesNewsAPI.get(`/articles/${article_id}`, {
    }).then(({ data }) => {
        return data.article;
    })
}

export const updateVoteForArticle = (article_id, vote) => {
    return alicesNewsAPI.patch(`./articles/${article_id}`, {
        "inc_votes": vote
    })
}

export const updateVoteForComment = (comment_id, vote) => {
    return alicesNewsAPI.patch(`./comments/${comment_id}`, {
        "inc_votes": vote
    })
}

export const getComments = (article_id, order, sort_by) => {
    return alicesNewsAPI.get(`/articles/${article_id}/comments`, {
        params: {
            order: order,
            sort_by: sort_by
        }
    }).then(({ data }) => {
        return data.commentsByArticleId;
    })
}

export const postComment = (article_id, commentToPost) => {
    return alicesNewsAPI.post(`/articles/${article_id}/comments`, commentToPost).then(({ data }) => {
        return data.postedComment[0]
        //Need to go to my API code and change this so that it returns an object not an object in an array!!!
    })
}

export const deleteComment = (comment_id) => {
    return alicesNewsAPI.delete(`/comments/${comment_id}`)
}