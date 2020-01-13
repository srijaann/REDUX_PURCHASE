import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  FormControl
} from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "../actions/promoCodeActions";
export class PromoCode extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  handleChange = e => {
    //the setState below will comes from redux
    //this.setState(value:e.target.value);
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      Promo Code{" "}
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>{" "}
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      // type="submit"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({ promoCode: state.promoCode.value });

export default connect(mapStateToProps, { handleChange })(PromoCode);
