import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import Opponent from '../components/opponent';
import TrainerSelf from '../components/TrainerSelf';
import { surrenderBattle, loadBattleOnce, listenToBattle, endListenToBattle, switchTurn, decreHeathPoint } from '../actions/battling';
import { getMoveDetail } from '../actions/moves';
import { logOpen, logClose } from '../actions/battle_feedback';
import Snackbar from 'material-ui/Snackbar';


class BattlingPage extends Component {
  componentWillMount() {
    const battleKey = this.props.location.pathname.split('/')[2];
    this.props.loadBattleOnce(battleKey)
    this.props.listenToBattle(battleKey)
  }
  componentWillUnmount() {
    const battleKey = this.props.location.pathname.split('/')[2];
    this.props.endListenToBattle(battleKey)
  }
  handleSurrender() {
    this.props.surrenderBattle()
  }
  render() {
    const { battleInfo, auth, getMoveDetail, moves, feedback, logOpen, logClose, switchTurn, decreHeathPoint } = this.props
    const battleKey = this.props.location.pathname.split('/')[2];
    return(
      <div>
        <h1>You are in battle Now!</h1>
        {battleInfo.battleDetail?
          <div className="battle_page_container">
            <Opponent battleInfo={battleInfo} hostId={auth.uid} trainers={battleInfo.battleDetail.trainers} />
            <TrainerSelf decreHeathPoint={decreHeathPoint} battleInfo={battleInfo} battleKey={battleKey} switchTurn={switchTurn} hostId={auth.uid} trainers={battleInfo.battleDetail.trainers} logOpen={logOpen} movesDetail={moves} getMove={getMoveDetail} trainer={battleInfo.battleDetail.trainers[auth.uid]} />
          </div>
          :'no detail yet'
        }
        <FlatButton onClick={this.handleSurrender.bind(this)} label="Surrender" secondary={true} />
        <Snackbar
          open={feedback.open}
          message={feedback.message}
          autoHideDuration={3000}
          onRequestClose={logClose}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    battleInfo: state.battleInfo,
    auth: state.auth,
    moves: state.moves,
    feedback: state.battle_feedback
  }
}



export default connect(mapStateToProps, { surrenderBattle, loadBattleOnce, listenToBattle, endListenToBattle, switchTurn, decreHeathPoint, getMoveDetail, logOpen, logClose })(BattlingPage)
