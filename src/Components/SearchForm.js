import React, { Component } from 'react';
import {Button, Form, FormControl} from "react-bootstrap";

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  render() {
    return (
          <Form inline onSubmit={this.handleSubmit}>
            <FormControl type="text"
                         className="form-control float-lg-right"
                         onChange={this.onSearchChange}
                         name="search"
                         ref={(input) => this.query = input}
                         placeholder="Search..." />
            <Button variant="outline-dark" type="submit"><i className="material-icons icon-search">search</i></Button>
          </Form>
    );

  }
}