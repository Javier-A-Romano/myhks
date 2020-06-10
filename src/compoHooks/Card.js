import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card text-primary">
        <img src={this.props.imagenEnv} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.nombreEnv}</h5>
          <p className="card-text">{this.props.direccionEnv}</p>
          <p className="card-text">{this.props.rubroEnv}</p>
        </div>
      </div>
    );
  }
}

export default Card;
