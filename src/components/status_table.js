import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class StatusTable extends Component {
  render() {
    const { stats } = this.props;
    return (
      <Table className={this.props.classDec} style={{'width': '30vw', 'textAlign': 'center'}} height={'15vw'}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {stats.map(stat => {
            return (
              <TableRow style={{'color': '#FF5722'}} key={stat.stat.name}>
                <TableRowColumn>{stat.stat.name.toUpperCase()}</TableRowColumn>
                <TableRowColumn>{stat.base_stat}</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}
