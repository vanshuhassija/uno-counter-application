import React from "react";
//Linking CSS Files
//import <path to file>.css
import "./index.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
class App extends React.Component {
  constructor() {
    //Always call super
    super();
    //Define the state Variable which is an object.
    //Each Component has its own separate state
    //State is local to component
    this.state = {
      //Now give all the Variable Names in the form of
      //key: value pairs
      counter: 0,
      shouldShowCounter: false,
    };
  }
  render() {
    const incrementCounter = () => {
      //Increment the counter variable
      // this.state.counter++;
      //This is not allowed in React
      //State is immutable in React
      this.setState({
        //Pass only those keys that you need to change
        counter: this.state.counter + 1,
      });
      //Pass an Object To Set State
      // Whenever a state variable changes, the nodes that are dependent
      //on that variable, get updated.
    };
    //Style needs to be Js Object Always
    // I want to wrap my elements
    // I donot want div to take extra space
    //Use Custom Component
    //In Cases Where You need not to write anything Between Closing and opening Tag

    //To Pass the props simply the follow the pattern
    // key=value
    return (
      <>
        <Counter
          currentCounter={this.state.counter}
          incrementCounter={incrementCounter}
        />
        <Navbar counter={this.state.counter}/>
      </>
    );
    //else
    return <Counter></Counter>;
  }
}

export default App;
