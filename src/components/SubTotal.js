import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class SubTotal extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>SubTotal</Col>
          <Col md={6}>
            <strong>{`SS{this.props.price}`}</strong>
          </Col>
        </Row>
      </div>
    );
  }
}
