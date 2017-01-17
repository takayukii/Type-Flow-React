// @flow
import React, { Component } from 'react';

type Props = {
  name: string,
  age: number
};

export class Home extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        Hello there, {this.props.name}, you are {this.props.age}, right?
      </div>
    );
  }
}
