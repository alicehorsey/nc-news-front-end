import axios from 'axios'

// const alicesNewsAPI = axios.create({
//     baseURL: 'https://alices-news-app.herokuapp.com/api',
// })

export const getAllTopics = () => {
    return axios.get('https://alices-news-app.herokuapp.com/api/topics').then(({ data }) => {
        console.log(data)
        return data.topics;
    })
}
