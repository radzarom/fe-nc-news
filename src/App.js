import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getTop5Articles } from './utils/api';

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ArticleCardListContainer from './components/containers/ArticleCardListContainer';
import ArticleContainer from './components/containers/ArticleContainer';

function App() {
  const [top5, setTop5] = useState([]);

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
        <Route path="/" element={<ArticleCardListContainer top5={top5}/>}></Route>
        <Route path="/articles" element={<ArticleCardListContainer top5={top5}/>}></Route>
        <Route path="/articles/:article_id" element={<ArticleContainer top5={top5}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
