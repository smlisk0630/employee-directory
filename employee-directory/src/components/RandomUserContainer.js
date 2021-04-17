import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import UserResultList from "./UserResultList";
import UserSearchForm from "./UserSearchForm";
// import API from "../utils/API";
import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

class RandomUserContainer extends Component {
  state = {
    search: "",
    results: {},
  };

  // When this component mounts, search the Random User API for Jim Nelson
  componentDidMount() {
    this.searchAPI("Jim Nelson");
  }

  searchAPI = () => {
    axios.get(BASEURL).then((results) => {
      this.setState({
        results: results.data.results[0]
      })
    });
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
            <Card heading={this.state.results?.name?.last || "Search for an Employee"}>
              {/* If a result is found, display details; otherwise, display No Results to Display */}
              {this.state.results?.name?.last ? (
                <UserResultList
                  name={this.state.results.name.first + " " + this.state.results.name.last}
                  location={this.state.results.location.city}
                  email={this.state.results.email}
                  phone={this.state.results.phone}
                  cell={this.state.results.cell}
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
