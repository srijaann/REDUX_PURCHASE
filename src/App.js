import React, { Component } from "react";
import "./App.css";
import { Grid,Card } from "react-bootstrap";
import SubTotal from "./components/SubTotal";
import PickupSavings from "./components/PickupSavings";
import TaxesFees from "./components/TaxesFees";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 125.99,
      taxes: 0,
      PickupSavings: -5.99,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.876 },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({ disablePromoButton: true });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)}></SubTotal>
          <PickupSavings price={this.state.PickupSavings}></PickupSavings>
          <TaxesFees price={this.state.taxes.toFixed(2)}></TaxesFees>
          <EstimatedTotal
            price={this.state.estimatedTotal.toFixed(2)}
          ></EstimatedTotal>
          <ItemDetails
            price={this.state.estimatedTotal.toFixed(2)}
          ></ItemDetails>
          <PromoCode></PromoCode>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ promoCode: state.promoCode.value });

export default connect(mapStateToProps, { handleChange })(App);
