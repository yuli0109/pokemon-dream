import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import HpBar from './HpBar';

export default class Opponent extends Component {
  render() {
    const { trainers, hostId } =  this.props
    const trainersIds = Object.keys(trainers)
    const opponentId = trainersIds.find(id => id !== hostId);
    const opponentInfo = trainers[opponentId];
    return (
      <div className="opponent_container">
        <div className="opponent_ava_name">
          <Avatar
            src={opponentInfo.front_img}
            size={200}
            backgroundColor={'white'}
          />
          <h4 style={{'textAlign': 'center'}}>{opponentInfo.name.toUpperCase()}</h4>
        </div>
        <div className="opponent_hp">
          <HpBar />
        </div>
      </div>
    )
  }
}
