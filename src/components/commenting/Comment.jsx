import { deleteComment } from "../../utils/api";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";

const Comment = ({ comment, setComments }) => {
  const { comment_id, author, body, votes, created_at } = comment;
  const {user, setUser} = useContext(UserContext);
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {

    if(user === author && typeof comment_id === 'number') {
      setCanDelete(true);
    }

  }, [])

  const deleteHandler = () => {

    setComments((currentComments) => {
      const index = currentComments.findIndex(comment => comment.comment_id === comment_id);

      
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
      {canDelete ? <button className="comment-delete" onClick={deleteHandler}>Delete</button> : null}
      <p className="comment-date">{new Date(created_at).toLocaleString()}</p>
    </li>
  );
};

export default Comment;
