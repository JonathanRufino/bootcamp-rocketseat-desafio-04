import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  const { author, content } = comment;

  return (
    <div className='comment'>
      <img src={author.avatar} alt='Avatar' />

      <p><strong>{author.name}</strong> {content}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.element.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

Comment.defaultProps = {};

export default Comment;
