import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Welcome from '../components/welcome';
import BattleRooms from '../containers/BattleRooms';
import BattlingPage from '../containers/BattlingPage';
import Trainer from '../containers/Trainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/trainer_info" component={Trainer} />
    <Route path="/battle_room" component={BattleRooms} />
    <Route path="/battle_page" component={BattlingPage} />
  </Route>
)
