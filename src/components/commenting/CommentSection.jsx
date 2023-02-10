import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../../utils/api";

import Comment from "./Comment.jsx";
import CommentForm from "./CommentForm";

const CommentSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [noComments, setNoComments] = useState(true);

  

  useEffect(() => {
    
    setNoComments(true);
    setComments([])

    getCommentsForArticle(article_id).then((comments) => {
      setComments(comments);
      if(comments.length !== 0) setNoComments(false)
    })
  }, [article_id]);

  if (noComments) {
    return (
      <section id="comment-section">
        <h2>Comments</h2>
        <CommentForm article_id={article_id} setComments={setComments}/>
        <p id="no-comments">There are no comments yet.</p>
      </section>
    );
  }

  return (
    <section id="comment-section">
      <h2>Comments</h2>
      <CommentForm article_id={article_id} setComments={setComments}/>
      <ul>
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} setComments={setComments}/>;
        })}
      </ul>
    </section>
  );
};

export default CommentSection;
