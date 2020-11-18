import React, { Component } from 'react';
import SearchForm from './Components/SearchForm';
import PostList from './Components/PostList';
import NoPosts from './Components/NoPosts';
import PaginationBasic from './Components/PaginationBasic';
import {Container, Row, Col, Navbar} from "react-bootstrap";
import './App.css';

export default class App extends Component {
  limitCount = 5;

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true,
      error: null,
      search: null,
      page: 1
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'reactjs') => {
    query = query.replaceAll(' ','');
    fetch(`https://www.reddit.com/r/${query}.json`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({search: query });
        if (responseData.error) {
          this.setState({
            posts: [],
            loading: false,
            error: responseData,
            page: 1
          });
        } else {
          this.setState({
            posts: responseData.data.children,
            loading: false,
            error: null,
            page: 1
          });
        }
      })
      .catch(e => {
        console.log('Error fetching and parsing data', e);
        this.setState({
          search: query,
          posts: [],
          loading: false,
          error: {
            reason: e.toString(),
            message: 'Error fetching and parsing data',
            error: 'ERR_FAILED'
          },
          page: 1
        });
      });
  }

  handleChangePage = (id) => {
    this.setState( { page:id });
  }

  render() {
    return (
    <Container fluid className="App">
      <Navbar bg="light">
        <Navbar.Brand>React: Recent subreddit Posts</Navbar.Brand>
        <SearchForm onSearch={this.performSearch} />
      </Navbar>
      <Row><Col md={{ span: 10, offset: 1 }}>
        <h1>subreddit: { this.state.search }</h1>
        {
          (this.state.error)
          ? <NoPosts error={this.state.error} />
          :(this.state.loading)
              ? <p>Loading...</p>
              : <PostList
                  page={this.state.page}
                  results={this.state.posts}
                  error={this.state.error}
                  limit={this.limitCount}
              />
        }
          <PaginationBasic
              setPage={this.handleChangePage}
              activePage={this.state.page}
              totalPages={this.state.posts.length/this.limitCount}
          />
      </Col></Row>
    </Container>
  );
  }
}
