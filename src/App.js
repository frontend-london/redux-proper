import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { simpleAction } from './actions/simpleAction'
import { counterIncrease, counterDecrease } from './actions/actionCounter'

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  counterIncrease: () => dispatch(counterIncrease()),
  counterDecrease: () => dispatch(counterDecrease()),
})

/*
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  /**
   * @memberof App
   * @summary handles counterIncrease click
   */
  counterIncrease = (event) => {
    this.props.counterIncrease();
  }

  /**
   * @memberof App
   * @summary handles counterDecrease click
   */
  counterDecrease = (event) => {
    this.props.counterDecrease();
  }

  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <br /><br />
        <button onClick={this.counterIncrease}>+</button>
        <button onClick={this.counterDecrease}>-</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);