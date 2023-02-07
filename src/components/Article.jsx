import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api.js";

import Vote from './Vote.jsx'

const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  const {title, author, created_at, body, votes} = article

  return (
    <article>
      <h2 id="article-title">{title}</h2>
      <p id="article-author">{author}</p>
      <p id="article-date">{new Date(created_at).toDateString()}</p>
      <p id="article-body">{body}</p>
      <Vote votes={votes}/>
    </article>
  );
};

export default Article;
