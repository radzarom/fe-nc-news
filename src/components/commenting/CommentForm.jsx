import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { postComment, getCommentsForArticle } from "../../utils/api";

const CommentForm = ({article_id, setComments}) => {
  const {user, setUser} = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [prompt, setPrompt] = useState('have your say...')
  const [promptClass, setPromptClass] = useState('commentform-neutral')


  const handleSubmit = (e) => {
    e.preventDefault();

    if(comment.length < 10 || user === '') {
        setPrompt('comments must be at least 10 characters to submit')
        setPromptClass('commentform-bad')
    } 
    else {
        setPrompt('comment posted')
        setPromptClass('commentform-good')
        setComments((currentComments) => {
          const date = Date().toLocaleString()
          return [{comment_id: date, author: user, body: comment, votes: 0, created_at: date}, ...currentComments]
        })

        postComment(article_id, comment, user).then(() => {

          setComment('')
          getCommentsForArticle(article_id).then((comments) => {
            setComments(comments);
          })
        })
        .catch(() => {
            setPrompt('could not post comment, please try again soon')
            setPromptClass('commentform-bad')
            setComments((currentComments) => {
              return currentComments.slice(1)
            })
        })
        
    }
  }

  return (
    <form className={promptClass} id="comment-form" onSubmit={handleSubmit}>
      <p>Contributing as <span>{user}</span></p>
      <label htmlFor="comment-body">{prompt}</label>
      <textarea id="comment-body" type="text" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      <button>Submit</button>
    </form>
  )
};

export default CommentForm;
