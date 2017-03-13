/**
 * GameRow component.
 */
import React, { Component } from 'react';

export default class GameRow extends React.Component {
  render() {
    return <div className="game__row">
      {this.props.children}
    </div>;
  }
}
