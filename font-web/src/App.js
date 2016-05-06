import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import $ from 'jquery'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  //tick() {
  //
  //  this.setState({
  //    counter: this.state.counter + this.props.increment
  //  });
  //}

  tick() {
    $.get({url:'/greeting?name='+this.state.counter,success:(respons)=>{
      this.setState({
        counter: respons.id
      });
    }})
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {

  }


  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
        this is hot reloading 123
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}