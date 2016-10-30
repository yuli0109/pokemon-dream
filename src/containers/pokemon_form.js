import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';

class PokemonForm extends Component {
  render() {
    return (
      <div className='selected_pokemon'>
        <h1 style={{'textAlign': 'center'}}>Selected Pokemon</h1>
        <Avatar
          src={this.props.selectedPokemon.data.sprites.front_default}
          size={200}
          style={{'marginLeft': '40px'}}
          backgroundColor={'white'}
        />
      </div>
    )
  };
}



function mapStateToProps(state) {
  return {trainer: state.trainer}
}

export default connect(mapStateToProps)(PokemonForm)
