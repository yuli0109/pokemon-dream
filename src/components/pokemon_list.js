import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { lightBlue200 } from 'material-ui/styles/colors';

const style = {
  'width': '20vw',
  'height': '400px',
  'textAlign': 'center',
  'overflowY': 'auto',
}

class PokemonList extends Component {
  handleClick(elm) {
    let url_fragment = elm.url.split('/');
    this.props.selectPokemon(url_fragment[url_fragment.length-2]);
  }
  ListItemIter(data) {
    return data.results.map(elm=>{
      return (
        <div key={elm.name}>
          <ListItem className="pokemon_list_item" onClick={this.handleClick.bind(this, elm)} primaryText={elm.name}/>
          <Divider className="pokemon_divider"/>
        </div>
      )
    })
  }
  render() {
    const { api_data } = this.props;
    if (!this.props.api_data) {return <div></div>}
    return (
      <div style={{'margin': '0 auto', 'width': '20vw', 'border': '3px solid', 'borderColor': lightBlue200}}>
        <List style={style}>
          {this.ListItemIter(api_data.data)}
        </List>
      </div>
    )
  }
}

export default PokemonList
