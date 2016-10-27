import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';


export default class NavBar extends Component {
  render() {
    return (
      <AppBar
      title="Pokenmon Dream"
      showMenuIconButton={false}
      iconElementRight={<NavRight />}
      iconStyleRight={{width: '700px'}}
      />
    )
  }
}

class NavRight extends Component {
  render() {
    return (
      <Tabs>
        <Tab label="Trainer" containerElement={<Link to="/" />} />
        <Tab label="Battle" containerElement={<Link to="/battle_room" />}/>
        <Tab label="Disabled" containerElement={<Link to="/" />} />
        <Tab label="Disabled Too" containerElement={<Link to="/" />}/>
      </Tabs>
    );
  }
}
