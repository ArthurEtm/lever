import React, { Component } from "react";

// When using state, we use Class component
class StateExample extends Component {
  //  when setting initial state, we use constructor and super() and we pass in props
  constructor(props) {
    super(props);
    //  here we initialize the state
    this.state = {
      inputValue: ""
    };

    // here we bind the created change function to this
    this.handleChange = this.handleChange.bind(this);
  }

  // here we create a function where we listen to the event, and based on the event we update the state
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  //   when using class component we have to use render()
  render() {
    return (
      <div className="text-center mt-5">
        {/* here we set the value of the state and onChange(we call the handleChange function that upadtes the state of what we input) */}

        <input
          type="text"
          placeholder="input"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <h3 className="mt-5">output:{this.state.inputValue}</h3>
      </div>
    );
  }
}

export default StateExample;

// !!! remember this represents the windows object, in the component this represents the functions internal object
