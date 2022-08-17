import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{ height: 50, background: "blue", fontSize: 30, color: "white" }}
      >
        {this.props.counter}
      </div>
    );
  }
}

export default Navbar;
