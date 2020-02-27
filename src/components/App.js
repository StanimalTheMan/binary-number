import React, { Component } from "react";
import Digit from "./Digit";

class App extends Component {
  state = { digits: [0, 0, 0, 0, 0, 0, 0, 0] };

  toggleClick = ind => {
    const copy = this.state.digits.slice();
    copy[ind] = copy[ind] === 1 ? 0 : 1;
    this.setState({ digits: copy });
  };

  computeBinary = () => {
    return parseInt(this.state.digits.join(""), 2);
  };
  render() {
    const indices = [0, 1, 2, 3, 4, 5, 6, 7];
    const digits = indices.map(ind => {
      return (
        <Digit
          key={ind}
          digit={this.state.digits[ind]}
          ind={ind}
          toggleClick={this.toggleClick}
        />
      );
    });
    const binary = this.computeBinary();
    return (
      <div>
        {digits}={binary}
      </div>
    );
  }
}

export default App;
