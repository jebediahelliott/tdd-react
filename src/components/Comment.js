import React from 'react';

const Comment = props => {
  return (
    <div className="Comment">
      <h4>{props.author}</h4>
      <p>{props.text}</p>
      <button
        id={props.id}
        onClick={() => props.onLike(props.id, props.author)}
        >
        like
        </button>
    </div>
  )
}

export default Comment
