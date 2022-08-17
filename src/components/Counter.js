//1. Import
// Declare Class
// Extend React.Component
// render method
// return from render
//export

import React from "react";

//Component name should always be startCase
class Counter extends React.Component {
  
  render() {
      console.log("Props Are",this.props,typeof this.props);
   
    //Whenever You want to style something,
    //It can only be done on html like elements
    return (
      <div style={{background:"red"}}>
        {/* A special Tag/Component which acts a parent but does not occupy any space in DOM */}
        <h1 className="counter">{this.props.currentCounter}</h1>
        {/* Try to make arrow functions everytime */}
        <button onClick={this.props.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Counter;
