import ArticleCardList from "../ArticleCardList";
import SideBar from "../SideBar.jsx";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { useSearchParams } from "react-router-dom";

const ArticleCardListContainer = ({ top5 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([])
  
  useEffect(() => {

    getArticles(searchParams.get('topic')).then((articles) => {
      setArticles(articles);
    })
  }, [searchParams])

  return (
    <main className="container">
      <ArticleCardList articles={articles}/>
      <SideBar top5={top5}/>
    </main>
  );
};

export default ArticleCardListContainer;
