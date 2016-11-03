import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class MoveOption extends Component {
  handleMoveChoose(move, canMove) {
    if (canMove) {
      this.props.logMove(`${this.props.pokemonName} made ${move.name}, the damge is ${move.power}`);
      this.props.switchTurn(this.props.battleKey, this.props.opponentId)
      if (this.props.currentHp < move.power) {
        this.props.decreHeathPoint(this.props.battleKey, this.props.opponentId, this.props.currentHp, move.power, true)
      } else {
        this.props.decreHeathPoint(this.props.battleKey, this.props.opponentId, this.props.currentHp, move.power, false)
      }
    } else {
      this.props.logMove(`Not your turn! Wait your opponent move!`);
    }
  }
  componentWillMount() {
    if (this.props.moves.move_1) {
      this.props.getMove(this.props.moves.move_1)
    }
    if (this.props.moves.move_2) {
      this.props.getMove(this.props.moves.move_2)
    }
  }
  render() {
    const { movesDetail, canMove } = this.props
    return (
      <Paper>
        <Menu style={{'width': '20vw'}}>
          <MenuItem disabled={!canMove} onClick={this.handleMoveChoose.bind(this, movesDetail.move_1, canMove)} primaryText={movesDetail.move_1?movesDetail.move_1.name:'Loading'} />
          <MenuItem disabled={!canMove} onClick={this.handleMoveChoose.bind(this, movesDetail.move_2, canMove)} primaryText={movesDetail.move_2?movesDetail.move_2.name:'Loading'} />
        </Menu>
      </Paper>
    )
  }
}
