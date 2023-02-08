import { useState } from "react";
import { sendVote } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  

  const vote = (increment) => {
    if(voteChange === 0) {
      setVoteChange(increment);
      sendVote(article_id, increment).catch((err) => {

        setVoteChange(0);
      })
      ;
    }

    if(voteChange === 1) {
      if(increment > 0) {
        setVoteChange(0);
        sendVote(article_id, -increment).catch((err) => {
          setVoteChange(1);
        })
        
      }
      else {
        setVoteChange(-1);
        sendVote(article_id, -2).catch((err) => {
          setVoteChange(1);
        })
      }
    }

    if(voteChange === -1) {
      if(increment < 0) {
        setVoteChange(0);
        sendVote(article_id, -increment).catch((err) => {
          setVoteChange(-1);
        })
      }
      else {
        setVoteChange(1)
        sendVote(article_id, 2).catch((err) => {
          setVoteChange(-1);
        })
      }
    }
  }

  return (
    <div id="vote-box">
      <h3>votes</h3>
      <div id="vote-buttons">
        <button className={voteChange === 1 ? 'vote-selected' : 'vote-unselected'} onClick={() => vote(1)}>&#9650;</button>
        <p>{(votes + voteChange).toString()}</p>
        <button className={voteChange === -1 ? 'vote-selected' : 'vote-unselected'} onClick={() => vote(-1)}>&#9660;</button>
      </div>
    </div>
  );
};

export default Vote;
