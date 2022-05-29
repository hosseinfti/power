import React, { Component } from "react";

class Input extends Component {
  render() {
    const { base, power, handleChangeInput } = this.props;
    return (
      <>
        <div className="inputContainer">
          <input
            type="number"
            value={base}
            placeholder="base"
            id={"base"}
            min="0"
            className="base"
            onChange={(e) => handleChangeInput(e)}
          />
          <input
            type="number"
            value={power}
            placeholder="power"
            id={"power"}
            min="0"
            className="power"
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div>=</div>
      </>
    );
  }
}

export default Input;
