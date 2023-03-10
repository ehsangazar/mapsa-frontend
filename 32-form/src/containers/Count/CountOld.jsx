import React from "react";
import Button from "../../components/Button/Button";

class CountOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleClickMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="Count">
        <h1>Count OLD</h1>
        <div className="Count--Buttons">
          <span>
            <Button handleClick={this.handleClickPlus}>+</Button>
          </span>
          <span className="value">{this.state.count}</span>
          <span>
            <Button handleClick={this.handleClickMinus}>-</Button>
          </span>
        </div>
      </div>
    );
  }
}

export default CountOld;
