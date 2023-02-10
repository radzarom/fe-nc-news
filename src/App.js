import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getTop5Articles } from './utils/api';

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ArticleCardListContainer from './components/containers/ArticleCardListContainer';
import ArticleContainer from './components/containers/ArticleContainer';
import ErrorPage from './components/ErrorPage';

function App() {
  const [top5, setTop5] = useState([]);
  const [sort, setSort] = useState({sort_by: 'created_at', order: 'desc'})

  useEffect(() => {

    getTop5Articles().then((articles) => {
      setTop5(articles);
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<ArticleCardListContainer sort={sort} setSort={setSort} top5={top5}/>}></Route>
        <Route path="/articles" element={<ArticleCardListContainer sort={sort} setSort={setSort} top5={top5}/>}></Route>
        <Route path="/articles/:article_id" element={<ArticleContainer top5={top5}/>}></Route>
        <Route path="/error/:reason" element={<ErrorPage/>}></Route>
        <Route path="/*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
