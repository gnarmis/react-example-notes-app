import React from 'react'
import { Link } from 'react-router'

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
        <p><Link to="/notes/new">New Note</Link></p>
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
      <div className="notes-list">
        <ul>
          {noteItems}
        </ul>
      </div>
    )
  }
})

let NoteItem = React.createClass({
  render() {
    return (
      <li>
        <p><b><Link to={`/notes/${this.props.id}`}>{this.props.title}</Link></b></p>
        <p>{this.props.content}</p>
      </li>
    )
  }
})

module.exports = NotesView