import {Link} from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <Link to={`/articles/${article.article_id}`} className="card-link" style={{textDecoration: 'none'}}>
        <img src={article.article_img_url} alt="" />
        <h2>{article.title}</h2>
        <div className="card-author-date">
          <p>{article.author}</p>
          <p>&#9650;{article.votes}&#9660;</p>
          <p>&#128488;{article.comment_count}</p>
          <p className="card-date">{ new Date(article.created_at).toDateString()}</p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
