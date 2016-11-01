import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

export default class MoveDescription extends Component {
  componentWillMount() {
    this.props.getMove(this.props.pokemon.moves.move_1);
  }
  renderMove(move) {
    return(
      <ListItem>
        <h2>Move: {move.name}</h2>
        <h4>Power: {move.power}</h4>
        <p>{move.flavor_text_entries[1].flavor_text}</p>
      </ListItem>
    )
  }
  render() {
    const { move_1, move_2 } = this.props.moveDetail;
    return(
      <div className="move_discription">
        <h1>Move description</h1>
        <List className="move_discrip_detail">
          {this.props.moveDetail.move_1?this.renderMove(move_1):<h1>Move 1</h1>}
          {this.props.moveDetail.move_2?this.renderMove(move_2):<ListItem><h3>Not Learnt</h3></ListItem>}
        </List>
      </div>
    )
  }
}
