import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

export default class MoveDescription extends Component {
  componentWillMount() {
    this.props.getMove(this.props.pokemon.moves.move_1);
  }
  renderMove() {
    return(
      <ListItem>
        <h2>Move: {this.props.moveDetail.move_1.name}</h2>
        <h4>Power: {this.props.moveDetail.move_1.power}</h4>
        <p>{this.props.moveDetail.move_1.flavor_text_entries[1].flavor_text}</p>
      </ListItem>
    )
  }
  render() {
    return(
      <div className="move_discription">
        <h1>Move description</h1>
        <List className="move_discrip_detail">
          {this.props.moveDetail.move_1?this.renderMove():<h1>No move</h1>}
        </List>
      </div>
    )
  }
}
