import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAllArticles } from './utils/api';

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ArticleCardListContainer from './components/containers/ArticleCardListContainer';
import ArticleContainer from './components/containers/ArticleContainer';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {

    getAllArticles().then((articles) => {
      console.log(articles);
      setArticles(articles)
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<ArticleCardListContainer articles={articles}/>}></Route>
        <Route path="/articles/:article_id" element={<ArticleContainer articles={articles}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
