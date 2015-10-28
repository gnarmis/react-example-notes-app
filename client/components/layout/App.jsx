import Uri from 'jsuri'
import React from 'react'
import Menu from './Menu.jsx'
import Router from 'react-router'

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  render: function () {
    return (
      <div id="app">
        <Menu origin={this.props.origin} />
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});
