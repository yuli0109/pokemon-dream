import React, { Component } from 'react';
import { connect } from 'react-redux';
import BattleRoom from '../components/battleroom';
import { takeSeat } from '../actions/battleRoom';

class BattleRooms extends Component {
  render() {
    const { battlerooms, takeSeat } = this.props
    return(
      <div style={{'width': '100vw', 'height': '80vw'}}>
        <h1 style={{'textAlign': 'center'}}>Battle Rooms</h1>
        <div className="battlerooms">
          <BattleRoom roomCode="room_1" takeSeat={takeSeat} roomInfo={battlerooms.room_1} status={battlerooms.status}/>
          <BattleRoom roomCode="room_2" takeSeat={takeSeat} roomInfo={battlerooms.room_2} status={battlerooms.status}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {battlerooms: state.battlerooms}
}


export default connect(mapStateToProps, { takeSeat })(BattleRooms)
