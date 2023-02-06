import ArticleCardList from "../ArticleCardList";
import SideBar from "../SideBar.jsx";

const ArticleCardListContainer = ({ articles }) => {
  return (
    <main className="container">
      <ArticleCardList articles={articles} />
      <SideBar />
    </main>
  );
};

export default ArticleCardListContainer;
