import React, {Component} from 'react';
import {connect} from 'react-redux';


export class PrivatePage extends Component {

  render() {
    return (
      <div>
        Private Page
      </div>
    )
  }
}

export default connect(
  ({authentication}) => ({username: authentication.username})
)(PrivatePage);
