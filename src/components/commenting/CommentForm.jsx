import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { postComment } from "../../utils/api";

const CommentForm = ({article_id}) => {
  const {user, setUser} = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [prompt, setPrompt] = useState('have your say...')


  const handleSubmit = (e) => {
    e.preventDefault();

    if(comment.length < 10 || user === '') {
        setPrompt('comments must be at least 10 characters to submit')
    } 
    else {
        setPrompt('comment posted')
        postComment(article_id, comment, user).catch(() => {
            setPrompt('could not post comment, please try again soon')
        })
        setComment('')
    }
  }

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <p>Contributing as <span>{user}</span></p>
      <label htmlFor="comment-body">{prompt}</label>
      <textarea id="comment-body" type="text" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      <button>Submit</button>
    </form>
  )
};

export default CommentForm;
