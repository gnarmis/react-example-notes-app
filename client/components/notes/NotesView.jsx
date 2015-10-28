import React from 'react'

let NotesView = React.createClass({
  getInitialState() {
    return {notes: []};
  },
  componentDidMount() {
    this.setState({notes: [{id: 1, title: 'a note', content: 'some content'}]})
  },
  render() {
    return (
      <div className="notes-view">
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
})

let NotesList = React.createClass({
  render() {
    let noteItems = this.props.notes.map((note) => {
      return (<NoteItem key={note.id} title={note.title} content={note.content} />)
    })

    return (
      <ul className="notes-list">
        {noteItems}
      </ul>
    )
  }
})

let NoteItem = React.createClass({
  render() {
    return (
      <li>
        <p>{this.props.title}</p>
        <p>{this.props.content}</p>
      </li>
    )
  }
})

module.exports = NotesView