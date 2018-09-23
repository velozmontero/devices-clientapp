import React, { Component } from 'react';

export default class NetworkActivity extends Component {
  render() {
    return this.props.show ? (
      <div className="network-activity-indicator">
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null
  }
}
