import axios from 'axios'

const api = axios.create({
    baseURL:'https://news-api-wh0q.onrender.com/api'
})

export const getAllArticles = () => {
  return api.get('/articles').then((res) => {
    return res.data.articles;
  })
}