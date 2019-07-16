import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function Post({ post }) {
  const { author, date, content, comments } = post;

  return (
    <section className='card'>
      <div>
        <img src={author.avatar} alt='Avatar' />

        <div className='info'>
          <h3>{author.name}</h3>
          <time>{date}</time>
        </div>
      </div>

      <p>{content}</p>

      <hr />

      {comments.map(comment => <Comment comment={comment} />)}
    </section>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.element.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.element.isRequired,
      }).isRequired,
      content: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

Post.defaultProps = {};

export default Post;
