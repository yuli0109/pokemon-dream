import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import Opponent from '../components/opponent';
import TrainerSelf from '../components/TrainerSelf';
import { surrenderBattle, loadBattleOnce, listenToBattle, endListenToBattle } from '../actions/battling';

class BattlingPage extends Component {
  componentWillMount() {
    const battleKey = this.props.location.pathname.split('/')[2];
    this.props.loadBattleOnce(battleKey)
    this.props.listenToBattle(battleKey)
  }
  componentWillUnmount() {

  }
  handleSurrender() {
    this.props.surrenderBattle()
  }
  render() {
    const { battleInfo, auth } = this.props
    return(
      <div>
        <h1>You are in battle Now!</h1>
        {battleInfo.battleDetail?
          <div className="battle_page_container">
            <Opponent hostId={auth.uid} trainers={battleInfo.battleDetail.trainers} />
            <TrainerSelf trainer={battleInfo.battleDetail.trainers[auth.uid]} />
          </div>
          // battleInfo.battleDetail.trainers[auth.uid].name
          :'no detail yet'
        }
        <FlatButton onClick={this.handleSurrender.bind(this)} label="Surrender" secondary={true} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    battleInfo: state.battleInfo,
    auth: state.auth
  }
}



export default connect(mapStateToProps, { surrenderBattle, loadBattleOnce, listenToBattle, endListenToBattle })(BattlingPage)
