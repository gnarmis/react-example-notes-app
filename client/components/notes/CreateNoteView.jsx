import React from 'react'
import { History } from 'react-router'

// dummy function
function writeToApi(data, callbackFn) {
  // return the newly created note
  callbackFn({id: 34, title: "foo", content: "bar"})
}


module.exports = React.createClass({
  mixins: [ History ],
  createNote(event) {
    event.preventDefault()
    let data = {
      title: this.refs.title,
      description: this.refs.description
    }
    writeToApi(data, (note) => {
      this.history.pushState(null, `/notes/${note.id}`)
    })
  },
  render() {
    return (
      <form name="create-note" onSubmit={this.createNote}>
        <h3>Create Note</h3>
        <p>
          <input type="text" ref="title" placeholder="title" />
        </p>
        <p>
          <textarea type="text" ref="content" placeholder="content" />
        </p>
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    )
  }
})