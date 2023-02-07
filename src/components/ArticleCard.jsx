const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <img src={article.article_img_url} alt="" />
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{Date(article.created_at).toString()}</p>
    </li>
  );
};

export default ArticleCard;
