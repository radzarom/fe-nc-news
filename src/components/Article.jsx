import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api.js";

const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  const {title, author, created_at, body} = article

  return (
    <article>
      <h2 id="article-title">{title}</h2>
      <p id="article-author">{author}</p>
      <p id="article-date">{new Date(created_at).toDateString()}</p>
      <p id="article-body">{body}</p>
    </article>
  );
};

export default Article;
