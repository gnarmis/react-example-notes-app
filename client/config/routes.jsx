import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/layout/App.jsx'
import AboutView from '../components/static/AboutView.jsx'
import HomeView from '../components/static/HomeView.jsx'
import NotesView from '../components/notes/NotesView.jsx'
import CreateNoteView from '../components/notes/CreateNoteView.jsx'
import NoteDetailView from '../components/notes/NoteDetailView.jsx'
import NotFoundView from '../components/static/NotFoundView.jsx'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="home" component={HomeView} />
    <Route path="about" component={AboutView} />
    <Route path="notes" component={NotesView} />
    <Route path="notes/new" component={CreateNoteView} />
      <Route path="notes/:id" component={NoteDetailView} />
    <Route path="*" component={NotFoundView} />
  </Route>
)
