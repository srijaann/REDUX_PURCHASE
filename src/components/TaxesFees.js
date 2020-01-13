import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class TaxesFees extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>Est.taxes & fees(Based on ZipCode)</Col>
          <Col md={6}>
            <strong>{`SS{this.props.taxes}`}</strong>
          </Col>
        </Row>
      </div>
    );
  }
}
