import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav>
      <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>All</Link>
      {topics.map((topic) => {
        return (
          <Link
            className="nav-link"
            to={`/articles?topic=${topic.slug}`}
            key={topic.slug}
            style={{ textDecoration: "none" }}
          >
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
