import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Welcome from '../components/welcome';
import BattleRoom from '../containers/BattleRoom';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="/battle_room" component={BattleRoom} />
  </Route>
)
