import React from 'react'

module.exports = React.createClass({
  getInitialState() {
    let { id } = this.props.params
    return {id: id, title: "", content: ""}
  },
  componentDidMount() {
    this.setState({
      id: this.state.id,
      title: "foo",
      content: "bar"
    })
  },
  render() {
    return (
      <div className="note-detail-view">
        <h3>{this.state.title}</h3>
        <p>{this.state.content}</p>
      </div>
    )
  }
})