import React from 'react';
import {ListGroup,Jumbotron} from "react-bootstrap";

const NoPosts = props => (
    <ListGroup.Item className="no-posts alert-danger">
        <h1 className="material-icons icon-post">sentiment_very_dissatisfied</h1>
        <p>Sorry, your search returned {props.error.error} {props.error.message}:  {props.error.reason}.</p>
    </ListGroup.Item>
);

export default NoPosts;