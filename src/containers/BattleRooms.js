import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlashOn from 'material-ui/svg-icons/image/flash-on';
import BattleRoom from '../components/battleroom';
import { takeSeat, leaveSeat } from '../actions/battleRoom';
import { syncRoute } from '../actions/routing';
import { initializeBattle } from '../actions/battling';

class BattleRooms extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.syncRoute(this.props.location);
  }
  handleBattle(room){
    if (!room.seat_1.isAvaliable && !room.seat_2.isAvaliable){
      this.props.initializeBattle(room)
      // this.context.router.push(`/battle_page`)
    } else {
      console.log('Need two trainer to begin battle');
    }
  }
  render() {
    const { auth, battlerooms, takeSeat, leaveSeat } = this.props;
    return(
      <div style={{'width': '100vw', 'height': '80vw'}}>
        <h1 style={{'textAlign': 'center'}}>Battle Rooms</h1>
        <div className="battlerooms">
          <div className="battleroom_wrap">
            <BattleRoom uid={auth.uid} roomCode="room_1" takeSeat={takeSeat} leaveSeat={leaveSeat} roomInfo={battlerooms.room_1} status={battlerooms.status}/>
            <div className="battle_btn">
              <FloatingActionButton onClick={this.handleBattle.bind(this, battlerooms.room_1)}>
                <FlashOn />
              </FloatingActionButton>
            </div>
          </div>
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

export default connect(mapStateToProps, { takeSeat, leaveSeat, syncRoute, initializeBattle })(BattleRooms)
