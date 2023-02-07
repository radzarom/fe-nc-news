import axios from 'axios'

const api = axios.create({
    baseURL:'https://news-api-wh0q.onrender.com/api'
})

export const getAllArticles = () => {
  return api.get('/articles').then((res) => {
    return res.data.articles;
  })
}

export const getArticleByID = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  })
}

export const getCommentsForArticle = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  })
}