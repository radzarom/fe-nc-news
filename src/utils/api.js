import axios from 'axios'

const api = axios.create({
    baseURL:'https://news-api-wh0q.onrender.com/api'
})

export const getArticles = (searchParams) => {
  return api.get('/articles', {params:searchParams}).then((res) => {
    
    return res.data.articles;
  })
}

export const getArticleByID = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  })
}


export const sendVote = (article_id, vote) => {
  return api.patch(`/articles/${article_id}`, {inc_votes: vote}).then((res) => {
    return res.data.article;
  })
}

export const getCommentsForArticle = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  })
}

export const postComment = (article_id, comment, author) => {
  return api.post(`/articles/${article_id}/comments`, {body: comment, username: author}).then((res) => {
    return res.data.comment
  })
}

export const getTop5Articles = () => {
  return api.get('/articles?sort_by=votes&limit=5').then((res) => {
    return res.data.articles;
  })
}

export const getTopics = () => {
  return api.get('/topics').then((res) => {
    return res.data.topics
  })
}

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`)
}