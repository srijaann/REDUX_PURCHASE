import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`}
          itemdetails{""}
          {this.state.open === false ? `+` : `-`}
        </Button>
      </div>
    );
  }
}
