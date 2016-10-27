import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const user = false;

export default class NavBar extends Component {
  render() {
    return (
      <AppBar
      title="Pokenmon Dream"
      showMenuIconButton={false}
      iconElementRight={user?<NavRight />:<FlatButton label="Login" primary={true} />}
      iconStyleRight={user?{width: '700px'}:{width: '100px'}}
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
        <Tab label="Disabled" containerElement={<Link to="/" />} disabled={true}/>
        <Tab label="Disabled Too" containerElement={<Link to="/" />}  disabled={true}/>
      </Tabs>
    );
  }
}
