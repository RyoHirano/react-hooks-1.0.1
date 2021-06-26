import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events.js'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-field">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
