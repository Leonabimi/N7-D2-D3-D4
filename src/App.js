import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { Route } from "react-router-dom";
import Favorites from "./Components/Favorites"

class App extends Component {
  state = {
    selected: null,
  };

  selectedJob = (body) => {
    this.setState({ selected: body });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} selectedJob={this.selectedJob} />}
        />
        <Route
          path="/details"
          exact
          render={(props) => (
            <Details {...props} jobDetails={this.state.selected} />
          )}
        />
        <Route path="/favorites" exact component={Favorites} />
      </div>
    );
  }
}

export default App;
