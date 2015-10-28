import React from 'react'
import { ReactRouter, Link } from 'react-router'

module.exports = React.createClass({
  render() {
    return (
      <ul className="menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/notes">Notes</Link></li>
      </ul>
    )
  }
})
