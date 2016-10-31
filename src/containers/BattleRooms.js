import React, { Component } from 'react';
import { connect } from 'react-redux';
import BattleRoom from '../components/battleroom';
import { takeSeat, leaveSeat } from '../actions/battleRoom';

class BattleRooms extends Component {
  render() {
    const { auth, battlerooms, takeSeat, leaveSeat } = this.props
    return(
      <div style={{'width': '100vw', 'height': '80vw'}}>
        <h1 style={{'textAlign': 'center'}}>Battle Rooms</h1>
        <div className="battlerooms">
          <BattleRoom uid={auth.uid} roomCode="room_1" takeSeat={takeSeat} leaveSeat={leaveSeat} roomInfo={battlerooms.room_1} status={battlerooms.status}/>
          <BattleRoom uid={auth.uid} roomCode="room_2" takeSeat={takeSeat} leaveSeat={leaveSeat} roomInfo={battlerooms.room_2} status={battlerooms.status}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    battlerooms: state.battlerooms,
    auth: state.auth
  }
}


export default connect(mapStateToProps, { takeSeat, leaveSeat })(BattleRooms)
