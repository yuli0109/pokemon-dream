import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import StatusTable from '../components/status_table';
import { connect } from 'react-redux';
import MoveDescription from '../components/move_description';
import TrainerInfo from '../components/TrainerInfo';
import { getMoveDetail } from '../actions/moves';


class TrainerMain extends Component {
  render() {
    const { pokemon, selected_pokemon } = this.props.trainer;
    const { auth, getMoveDetail, moves } =  this.props;
    return(
      <div className="trainer_container">
        <TrainerInfo info={auth} />
        <div className="ava_stat_pokemon_trainer">
          <div className="ava_name">
            <Avatar
                src={selected_pokemon?selected_pokemon.data.sprites.front_default:null}
                size={200}
                style={{'marginLeft': '40px'}}
                backgroundColor={'white'}
              />
            <h3 style={{'padding': '0', 'fontSize': 25}}>{pokemon.name.toUpperCase()}</h3>
          </div>
          <StatusTable stats={pokemon.stats} classDec="trainer_poke_stats"/>
        </div>
        <MoveDescription moveDetail={moves} getMove={getMoveDetail} pokemon={pokemon}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    trainer: state.trainer,
    auth: state.auth,
    moves: state.moves
  }
}

export default connect(mapStateToProps, { getMoveDetail })(TrainerMain)
