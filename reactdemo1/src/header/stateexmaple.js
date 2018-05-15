import React, { Component } from 'react';

class StateExample extends Component {
  constructor(){
      super()
      this.state = {
          count:0
      };
  }

  render(){
    return (
      <button onClick={() => this.updateCount()}>
        Clicked {this.state.count} times.
      </button>
    );
  }

  updateCount() {
    this.setState((previousState, props) => {
      return {count: previousState.count + 1};
    });
  }
}

export default StateExample;