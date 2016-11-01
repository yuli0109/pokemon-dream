import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { openAuth, logoutUser } from '../actions/auth';
import { connect  } from 'react-redux';


class NavBar extends Component {
  render() {
    const user = this.props.auth;
    return (
      <AppBar
      title="Pokemon Dream"
      showMenuIconButton={false}
      iconElementRight={user.uid?<NavRight logout={this.props.logoutUser}/>:<LogButton login={this.props.openAuth}/>}
      iconStyleRight={user.uid?{width: '500px'}:{width: '100px'}}
      />
    )
  }
}


class LogButton extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  handleLogin() {
    this.props.login()
    this.context.router.push('/trainer_info');
  }
  render() {
    return (
      <FlatButton label="Login" style={{color: 'white'}} onClick={this.handleLogin.bind(this)}/>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

const mapDispatchToProps = {
  openAuth,
  logoutUser
}

class NavRight extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  handleLogout(){
    this.props.logout()
    this.context.router.push('/')
  }
  render() {
    return (
      <Tabs>
        <Tab label="Trainer" containerElement={<Link to="/trainer_info" />} />
        <Tab label="Battle" containerElement={<Link to="/battle_room" />}/>
        <Tab label="Logout" onClick={this.handleLogout.bind(this)}/>
      </Tabs>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
