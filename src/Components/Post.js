import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

const Post = props => (
  <ListGroup.Item action href={props.data.url}>
      <h3>{props.data.title}</h3>
      <p>{props.data.selftext}</p>
  </ListGroup.Item>
);

export default Post;