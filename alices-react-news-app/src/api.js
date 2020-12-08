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
