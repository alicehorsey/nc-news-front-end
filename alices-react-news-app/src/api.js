import axios from 'axios'

const alicesNewsAPI = axios.create({
    baseURL: 'https://alices-news-app.herokuapp.com/api',
})

export const getAllTopics = () => {
    return alicesNewsAPI.get('/topics').then(({ data }) => {
        return data.topics;
    })
}

export const getArticles = (topic_name) => {
    return alicesNewsAPI.get('/articles', {
        params: {
            topic: topic_name
        }
    }).then(({ data }) => {
        console.log(data)
        return data.articles;
    })
}
