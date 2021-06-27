import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events.js'
import AppContext from '../contexts/AppContext'

const App = () => {
  const insitalState = {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, insitalState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-field">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App
