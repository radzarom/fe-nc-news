const Comment = ({ comment }) => {
  const { author, body, votes, created_at } = comment;

  return (
    <li className="comment">
      <h3 className="comment-author">{author}</h3>
      <p className="comment-body">{body}</p>
      <p className="comment-votes">{"Votes: " + votes}</p>
      <p className="comment-date">{new Date(created_at).toLocaleString()}</p>
    </li>
  );
};

export default Comment;
