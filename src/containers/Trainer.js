import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { getPokemon, selectPokemon } from '../actions/trainer';
import { syncRoute } from '../actions/routing';
import PokemonList from '../components/pokemon_list';
import PokemonForm from './pokemon_form';
import TrainerMain from './trainer_main';


class Trainer extends Component {
  componentWillMount() {
    this.props.syncRoute(this.props.location)
  }
  handleClick() {
    this.props.getPokemon()
  }
  render() {
    const { pokemon, api_data, selected_pokemon } = this.props.trainer;
    return (
      <div className='trainer-main'>
        { pokemon?
          <TrainerMain />:
          <div className='pokemon_add'>
            <RaisedButton
              label="Get Your Pokemon"
              labelPosition="before"
              icon={<FontIcon className="material-icons">whatshot</FontIcon>}
              primary={true}
              style={{'margin': '0 auto', 'marginTop': '12px', 'marginBottom': '12px', 'width': '18vw'}}
              onClick={this.handleClick.bind(this)}
            />
            <PokemonList api_data={api_data} selectPokemon={this.props.selectPokemon}/>
          </div>
        }
        {!pokemon && selected_pokemon ? <PokemonForm selectedPokemon={selected_pokemon}/> : null}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    trainer: state.trainer
  }
}

export default connect(mapStateToProps, { getPokemon, selectPokemon, syncRoute })(Trainer)

