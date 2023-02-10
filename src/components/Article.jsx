import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api.js";
import { useNavigate } from "react-router-dom";

import Vote from './Vote.jsx'
import CommentSection from './commenting/CommentSection.jsx'


const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);

      navigate('/error/noarticle')
    })
  }, [article_id]);

  const {title, author, created_at, body, votes} = article

  if(isLoading) {
    return <p className="loading">loading...</p>
  }

  return (
    <article>
      <h2 id="article-title">{title}</h2>
      <p id="article-author">{author}</p>
      <p id="article-date">{new Date(created_at).toDateString()}</p>
      <p id="article-body">{body}</p>
      <Vote votes={votes} article_id={article_id}/>
      <CommentSection article_id={article_id}/>
    </article>
  );
};

export default Article;
