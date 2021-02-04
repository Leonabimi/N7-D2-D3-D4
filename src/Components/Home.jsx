import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobs: (url) => {
    dispatch(async (dispatch, getState) => {
      try {
        const response = await fetch(url);
        let data = await response.json();
        if (response.ok) {
          dispatch({
            type: "ADD_JOBS",
            payload: data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
});

class Home extends Component {
  state = {
    jobs: { position: "", location: "" },
  };

  // componentDidMount = async () => {
  //   let response = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`,
  //     {
  //       headers: {
  //         methode: "GET",
  //       },
  //     }
  //   );
  //   let jobs = await response.json();
  //   this.setState({ jobs });
  // };

  onChangeHandler = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) this.submitData(e);
    console.log(this.state);
    this.setState({
      jobs: { ...this.state.jobs, [e.target.id]: e.currentTarget.value },
    });
  };

  submitData = async (e) => {
    e.preventDefault();
    try {
      console.log();
      let url = `/positions.json?description=${this.state.jobs.position}&location=${this.state.jobs.location}`;
      await this.props.getJobs(url);
      // //let data = await response.json();
      // console.log(data);
      // this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let data = this.props.jobs;
    return (
      <>
        <Form>
          <Form.Group controlId="position">
            <Form.Label>Enter position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => this.submitData(e)}
          >
            Search
          </Button>
        </Form>
        {data && data.length > 0 ? (
          data.map((result, index) => {
            console.log(index);
            return (
              <li key={index} onClick={() => this.props.selectedJob(result)}>
                <Link to="details">{result.company}</Link>
              </li>
            );
          })
        ) : (
          <h3>Search A Job</h3>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
