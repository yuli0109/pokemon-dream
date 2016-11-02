import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import HpBar from './HpBar';
import MoveOption from './MoveOption';

export default class Opponent extends Component {
  render() {
    const { trainers, hostId, trainer, getMove, movesDetail, logOpen, switchTurn, battleKey, battleInfo } =  this.props
    const trainersIds = Object.keys(trainers)
    const opponentId = trainersIds.find(id => id !== hostId);
    const canMove = battleInfo.battleDetail.nextTurn === hostId;
    return (
      <div className="trainer_self_container">
        <div className="trainer_self_hp">
          <HpBar />
        </div>
        <div className="trainer_self_ava_name">
          <h4>{trainer.name.toUpperCase()}</h4>
          <Avatar
            src={trainer.back_img}
            size={200}
            backgroundColor={'white'}
          />
        </div>
        <div className="move_option">
          <MoveOption canMove={canMove} battleInfo={battleInfo} battleKey={battleKey} switchTurn={switchTurn} opponentId={opponentId} pokemonName={trainer.name} logMove={logOpen} movesDetail={movesDetail} getMove={getMove} moves={trainer.moves}/>
        </div>
      </div>
    )
  }
}
