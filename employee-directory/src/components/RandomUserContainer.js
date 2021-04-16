import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import UserResultList from "./UserResultList";
import UserSearchForm from "./UserSearchForm";
import API from "../utils/API";

class RandomUserContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the Random User API for Jim Nelson
  componentDidMount() {
    this.searchAPI("Jim Nelson");
  }

  searchAPI = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Random User API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchAPI(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result || "Search for an Employee"}
            >
            { /* If a result is found, display details; otherwise, display No Results to Display */}
              {this.state.result ? (
                <UserResultList
                  name={this.state.result.Name}
                  location={this.state.result.Location}
                  email={this.state.result.Email}
                  phone={this.state.result.Phone}
                  cell={this.state.result.Cell}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <UserSearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RandomUserContainer;
