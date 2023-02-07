import ArticleCard from "./ArticleCard.jsx";

const ArticleCardList = ({ articles }) => {


  if(articles.length != 0) {
    return (
      <ul id="card-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    );
  }
  else {
    return <p>loading...</p>
  }
};

export default ArticleCardList;
