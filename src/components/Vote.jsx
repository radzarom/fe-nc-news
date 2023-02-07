import {useState} from 'react'

const Vote = ({ votes }) => {
    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);

  return (
    <div id="vote-box">
      <h3>votes</h3>
      <div id="vote-buttons">
        <button onClick>&#9650;</button>
        <p>{votes}</p>
        <button>&#9660;</button>
      </div>
    </div>
  );
};

export default Vote;
