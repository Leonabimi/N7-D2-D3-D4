import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeToFavorites: (job) =>
    dispatch({
      type: "REMOVE_JOB_FROM_FAVORITES",
      payload: job,
    }),
});

class Favorites extends Component {
  render() {
    const { jobs } = this.props.favorites;
    console.log(jobs);
    return (
      <div>
        {jobs &&
          jobs.map((job, index) => (
            <li key={index}>
              <img style={{ height: 100 }} src={job.company_logo} />
              <h3>{job.company}</h3>
              <h6>
                {job.title},{job.type}
              </h6>
              <Button
                onClick={() => this.props.removeToFavorites(job)}
                className="mt-5 mb-5"
                variant="danger"
              >
                Delete
              </Button>
            </li>
          ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
