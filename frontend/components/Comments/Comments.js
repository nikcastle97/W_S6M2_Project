import React from 'react';
import Comment from './Comment';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div className='comments-wrapper'>
      {/* map through the comments prop and render a Comment for every piece of data */}
      <h3>Comments:</h3>
      {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
    </div>
  );
};

export default Comments;
