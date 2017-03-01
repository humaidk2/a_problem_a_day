import React from 'react';

export default class Codeeditor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.edit();
  }
  render () {
    return (
            <textarea id="code-js">
            </textarea>);
  }
}