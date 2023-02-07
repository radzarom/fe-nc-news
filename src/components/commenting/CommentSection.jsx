import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../../utils/api";

import Comment from "./Comment.jsx";

const CommentSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsForArticle(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <section id="comment-section">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentSection;
