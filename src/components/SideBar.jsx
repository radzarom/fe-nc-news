import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import ArticleCardList from "./ArticleCardList";

const SideBar = ({ top5 }) => {

  return (
    <aside id="sidebar">
      <h2>Top 5 Most Discussed</h2>
      <ArticleCardList articles={top5}/>
    </aside>
  );
};

export default SideBar;
