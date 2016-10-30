import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

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
          <ListItem onClick={this.handleClick.bind(this, elm)} primaryText={elm.name} />
          <Divider style={{'width': '10vw','margin': '0'}}inset={true} />
        </div>
      )
    })
  }
  render() {
    const { api_data } = this.props;
    if (!this.props.api_data) {return <div></div>}
    return (
      <List style={style} className="list-group">
        {this.ListItemIter(api_data.data)}
      </List>
    )
  }
}

export default PokemonList
