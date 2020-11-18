import React from 'react';
import Post from './Post';
import NoPosts from './NoPosts';
import ListGroup from 'react-bootstrap/ListGroup'

const PostList = props => {
  const {
    limit,
    page,
    results,
    error
  } = props;
  const start = (page-1)*limit;
  let posts;
  if (results.length) {
    posts = results.slice(start, start+limit).map(post => <Post data={post.data} key={post.data.id} />);
  } else {
    posts = <NoPosts error={error} />
  }

  return(
    <ListGroup>
      {posts}
    </ListGroup>
  );
}

export default PostList;
