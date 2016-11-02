import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

export default class Opponent extends Component {
  render() {
    const { trainer } =  this.props
    return (
      <div className="trainer_self_container">
        <div className="trainer_self_ava_name">
          <Avatar
            src={trainer.back_img}
            size={200}
            backgroundColor={'white'}
          />
          <h4>{trainer.name.toUpperCase()}</h4>
        </div>
      </div>
    )
  }
}
