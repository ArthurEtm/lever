import React, { Component } from "react";
import Button from "react-bootstrap/Button";

// When using state, we use Class component
class Lever extends Component {
  //  when setting initial state, we use constructor and super() and we pass in props
  constructor(props) {
    super(props);
    //  here we initialize the state
    this.state = {
      clicks: 0,
      show: true
      //inputValue: ""
    };

    // here we bind the created change function to this
  }

  //here we create a function where we listen to the event, and based on the event we update the state

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  //when using class component we have to use render()
  render() {
    return (
      <div className="text-center mt-5">
        {/* here we set the value of the state and onChange(we call the handleChange function that upadtes the state of what we input) */}

        <Button variant="light">Gelfriend was hot like me</Button>

        <Button variant="dark" onClick={this.IncrementItem}>
          Click to increment by 1
        </Button>

        <Button variant="light" onClick={this.DecreaseItem}>
          Click to decrease by 1
        </Button>

        <Button variant="primary" onClick={this.ToggleClick}>
          {this.state.show ? "Hide number" : "Show number"}
        </Button>

        {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
      </div>
    );
  }
}

export default Lever;

// !!! remember this represents the windows object, in the component this represents the functions internal object
