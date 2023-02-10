import ArticleCardList from "../ArticleCardList";
import SideBar from "../SideBar.jsx";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import CardSort from "../CardSort";

const ArticleCardListContainer = ({ top5, sort, setSort }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    console.log("fafavjba");
    getArticles({topic:searchParams.get('topic'), sort_by: sort.sort_by, order: sort.order}).then((articles) => {
      setArticles(articles);
    })
  }, [searchParams, sort])

  return (
    <main className="container">
      <CardSort sort={sort} setSort={setSort}/>
      <ArticleCardList articles={articles}/>
      <SideBar top5={top5}/>
    </main>
  );
};

export default ArticleCardListContainer;
