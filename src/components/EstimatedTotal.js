import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>
          <h2>Estimated Total</h2>
        </Col>
        <Col>
          <h2>{`$${this.props.price}`}</h2>
        </Col>
      </Row>
    );
  }
}
