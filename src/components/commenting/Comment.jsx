import { deleteComment } from "../../utils/api";

const Comment = ({ comment, setComments }) => {
  const { comment_id, author, body, votes, created_at } = comment;

  const deleteHandler = () => {

    setComments((currentComments) => {
      const index = currentComments.findIndex(comments => comment.comment_id === comment_id);

      
      return currentComments.slice(0, index).concat(currentComments.slice(index + 1));;
    })
    
    deleteComment(comment_id).then(() => {

    })
  }

  return (
    <li className="comment">
      <h3 className="comment-author">{author}</h3>
      <p className="comment-body">{body}</p>
      <p className="comment-votes">{"Votes: " + votes}</p>
      <button className="comment-delete" onClick={deleteHandler}>Delete</button>
      <p className="comment-date">{new Date(created_at).toLocaleString()}</p>
    </li>
  );
};

export default Comment;
