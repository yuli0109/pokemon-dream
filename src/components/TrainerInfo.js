import React, { Component } from 'react';

export default class TrainerInfo extends Component {
  render() {
    return (
      <div className="trainer_info">
        <h1>Trainer: {this.props.info.username}</h1>
      </div>
    )
  }
}
