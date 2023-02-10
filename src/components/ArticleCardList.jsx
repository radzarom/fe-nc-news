import ArticleCard from "./ArticleCard.jsx";
import {useEffect, useState} from 'react'

const ArticleCardList = ({ articles }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(articles && articles.length !== 0) setIsLoading(false)

  }, [articles])

  if(isLoading) return <p className="loading">loading...</p>
 
  return (
      <ul id="card-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
  );
};

export default ArticleCardList;
