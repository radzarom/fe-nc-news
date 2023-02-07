import {Link} from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <Link to={`/articles/${article.article_id}`} style={{textDecoration: 'none'}}>
      <img src={article.article_img_url} alt="" />
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{ new Date(article.created_at).toDateString()}</p>
      </Link>
    </li>
  );
};

export default ArticleCard;
