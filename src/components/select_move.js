import React, { Component } from 'react';
import Select from 'react-select';


export default class SelectMove extends Component {
  onChange(event) {
    if (this.props.input.onChange) {
      this.props.input.onChange(event.value); // <-- To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
    }
  }
  render() {
    return (
      <Select
        {...this.props}
        value={this.props.input.value || ""}
        onBlur={() => this.props.input.onBlur(this.props.input.value)}
        onChange={this.onChange.bind(this)}
        options={this.props.options} // <-- Receive options from the form
        autosize={false}
        placeholder="Select Move..."
        clearable={false}
      />
    );
  }
}
