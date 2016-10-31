import React, { Component } from 'react';

export default class BattleRoom extends Component {
  handleClick(room, seat, status) {
    if (status !== 'ON_SEAT') {
      this.props.takeSeat(room, seat)
    } else {
      console.log('You already on seat!')
    }
  }
  render() {
    const { seat_1, seat_2 } = this.props.roomInfo;
    const { roomCode, status } = this.props
    return (
      <div className="battleroom">
        <div onClick={this.handleClick.bind(this, roomCode , 'seat_1', status)} className={seat_1.isAvaliable ? 'seat' : 'seat on_seat'}>
          <span>Seat 1</span>
        </div>
        <div onClick={this.handleClick.bind(this, roomCode , 'seat_2', status)} className={seat_2.isAvaliable ? 'seat' : 'seat on_seat'}>
          <span>Seat 2</span>
        </div>
      </div>
    )
  }
}
