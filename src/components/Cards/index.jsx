import React, { Component } from "react";
import Card from "./Card";
import "./style.css";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      compaines: [
        { id: 1, name: `Cyberron` },
        { id: 2, name: `InvisionCore` },
        { id: 3, name: `Stratum Optics` }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="cardContainer">
          {this.state.compaines.map(company => {
            return (
              <Card
                companyName={company.name}
                companyDescription={`Learn More`}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
