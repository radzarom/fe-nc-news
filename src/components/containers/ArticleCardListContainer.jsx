import ArticleCardList from "../ArticleCardList";
import SideBar from "../SideBar.jsx";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardSort from "../CardSort";

const ArticleCardListContainer = ({ top5, sort, setSort }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    getArticles({topic:searchParams.get('topic'), sort_by: sort.sort_by, order: sort.order}).then((articles) => {
      setArticles(articles);
    })
    .catch((err) => {
      if(err.response.data.msg == 'Invalid topic name used') {

        navigate('/error/notopic')
      }
      console.log(err.response.data.msg);
    })
  }, [searchParams, sort])

  return (
    <main className="container">
      <CardSort sort={sort} setSort={setSort}/>
      <div id="content-sidebar">
        <ArticleCardList articles={articles}/>
        <SideBar top5={top5}/>
      </div>
    </main>
  );
};

export default ArticleCardListContainer;
