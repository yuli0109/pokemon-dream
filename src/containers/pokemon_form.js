import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import 'react-select/dist/react-select.css';
import { savePokemon } from '../actions/trainer';
import SelectMove from '../components/select_move';
import StatusTable from '../components/status_table';


class renderMoveField extends Component {
  render() {
    const props = this.props;
    const { label, meta: { touched, error, invalid } } = this.props
    return(
      <div style={{'width': '30vw'}} className={touched && invalid ? 'has-danger' : ''}>
        <label>{label}</label>
        <SelectMove
          {...props}
          options={this.props.options}
        />
        {touched && error && <span className="error">{error}</span>}
      </div>
  )}
}


class PokemonForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props) {
    this.props.savePokemon(props);
    this.context.router.push('/battle_room');
  }
  render() {
    const { trainer, handleSubmit, pristine, submitting, reset } = this.props;
    const pokemon_data = trainer.selected_pokemon.data;
    const moveOptions = pokemon_data.moves.map(move => {
      return {
        value: move.move.url,
        label: move.move.name
      }
    })
    return (
      <div className='selected_pokemon'>
        <h1 style={{'textAlign': 'center'}}>Selected Pokemon</h1>
        <div className="avatar_table">
          <Avatar
            src={this.props.selectedPokemon.data.sprites.front_default}
            size={200}
            style={{'marginLeft': '40px'}}
            backgroundColor={'white'}
          />
          <StatusTable stats={pokemon_data.stats}/>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Move 1"
            name="move_1"
            component={renderMoveField}
            options={moveOptions}
          />
          <Field
            label="Move 2"
            name="move_2"
            component={renderMoveField}
            options={moveOptions}
          />
          <FlatButton disabled={pristine || submitting} type="submit" label="SAVE" primary={true} />
          <FlatButton disabled={pristine || submitting} label="CLEAR" onClick={reset} secondary={true} />
        </form>
      </div>
    )
  };
}

const validate = values => {
  const errors = {};
  if (!values.move_1) {
    errors.move_1 = 'At least one move required!'
  }
  if (values.move_1 === values.move_2) {
    errors.move_2 = 'Can not duplicate move!'
  }

  return errors
}


function mapStateToProps(state) {
  return {trainer: state.trainer}
}

const PokemonNew = reduxForm({
  form: 'PokemonForm',
  validate
})(PokemonForm)

export default connect(mapStateToProps, { savePokemon })(PokemonNew)
