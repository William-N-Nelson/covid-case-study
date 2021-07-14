import React from 'react'
import SearchBar from './pages/search'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (
  <Router>
    <Switch>
      <Route exact path = "/" component = {SearchBar} />
      <ul>
          {franchiseTaxpayers.map((ft) => (
            <li key={ft.id}>{ft.name}</li>
          ))}
      </ul>
    </Switch>
  </Router>
  )
}

export default App

