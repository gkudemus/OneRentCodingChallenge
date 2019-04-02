import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class header extends Component {
  render() {
    return (
      <div style={{marginBottom: 30}}>
        <Link to='/properties'><button style={{marginRight: 10}}>All Properties</button></Link>
        <Link to='/owners'><button style={{marginRight: 10}}>All Owners</button></Link>
        <Link to="/search"><button style={{marginRight: 10}}>Search</button></Link>
      </div>
    );
  }
}

export default withRouter(header);
