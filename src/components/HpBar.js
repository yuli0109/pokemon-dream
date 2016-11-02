import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  width: '25vw',
  height: '20px'
}

export default class HpBar extends Component {
  render() {
    return (
      <div className="heath_point">
        <h4>Hp:</h4>
        <LinearProgress style={style} mode="determinate" value={100} />
      </div>
    )
  }
}
