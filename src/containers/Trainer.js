import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { getPokemon, selectPokemon } from '../actions/trainer';
import PokemonList from '../components/pokemon_list';
import PokemonForm from './pokemon_form';


class Trainer extends Component {
  handleClick() {
    this.props.getPokemon()
  }
  render() {
    const { api_data, selected_pokemon } = this.props.trainer
    return (
      <div className='trainer-main'>
        <div className='pokemon_add'>
        <RaisedButton
          label="Get Your Pokemon"
          labelPosition="before"
          icon={<FontIcon className="material-icons">whatshot</FontIcon>}
          primary={true}
          style={{margin: 12}}
          onClick={this.handleClick.bind(this)}
        />
        <PokemonList api_data={api_data} selectPokemon={this.props.selectPokemon}/>
        </div>
        {selected_pokemon ? <PokemonForm selectedPokemon={selected_pokemon}/> : null}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {trainer: state.trainer}
}

export default connect(mapStateToProps, { getPokemon, selectPokemon })(Trainer)

