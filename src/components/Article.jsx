import { useEffect, useState } from "react";
import { getArticleByID } from "../utils/api.js";

const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <article>
      <h2 id="article-title">{article.title}</h2>
      <p id="article-author">{article.author}</p>
      <p id="article-date">{new Date(article.created_at).toDateString()}</p>
      <p id="article-body">{article.body}</p>
    </article>
  );
};

export default Article;
