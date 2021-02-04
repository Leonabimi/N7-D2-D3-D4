import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (job) =>
    dispatch({
      type: "ADD_JOB_TO_FAVORITES",
      payload: job,
    }),
});

class Details extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.jobDetails.company_logo} />
          <Card.Body>
            <Card.Title>{this.props.jobDetails.company}</Card.Title>
            <Card.Text>
              {this.props.jobDetails.title},{this.props.jobDetails.type}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.jobDetails.description}</ListGroupItem>
            <ListGroupItem>
              <Card.Text>{this.props.jobDetails.location} </Card.Text>
            </ListGroupItem>
            <ListGroupItem>{this.props.jobDetails.created_at}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">{this.props.jobDetails.company_url}</Card.Link>
            <Card.Link href="#">{this.props.jobDetails.url}</Card.Link>
          </Card.Body>
          <Button
            className="ml-5"
            variant="dark"
            onClick={() => this.props.addToFavorites(this.props.jobDetails)}
          >
            add to favorite
          </Button>
          <Link to="/favorites">Go to favorites</Link>
        </Card>
      </div>
    );
  }
}

export default connect(() => {}, mapDispatchToProps)(Details);
