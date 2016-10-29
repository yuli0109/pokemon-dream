import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { getPokemon } from '../actions/trainer';
import PokemonList from '../components/pokemon_list';


class Trainer extends Component {
  handleSweet() {
    this.props.getPokemon()
  }
  render() {
    const { api_data } = this.props.trainer
    return (
      <div>
        <h1>Trainer Info</h1>
        <RaisedButton
          label="Get Your Pokemon"
          labelPosition="before"
          icon={<FontIcon className="material-icons">whatshot</FontIcon>}
          primary={true}
          style={{margin: 12}}
          onClick={this.handleSweet.bind(this)}
        />
        <PokemonList api_data={api_data} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {trainer: state.trainer}
}

export default connect(mapStateToProps, { getPokemon })(Trainer)

