import React from 'react'

module.exports = React.createClass({
  render() {
    var pathname = window.location.pathname;

    return (
      <h3>Could Not Find {pathname}</h3>
    )
  }
})