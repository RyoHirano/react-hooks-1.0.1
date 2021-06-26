const events = (state = [], action) => {
  const createEvent = () => {
    const event = { title: action.title, body: action.body }
    const length = state.length
    const id = length === 0 ? 1 : state[length - 1].id + 1
    return [...state, { id, ...event }]
  }

  const deleteEvent = () => {
    return state.filter((event) => event.id !== action.id)
  }

  switch (action.type) {
    case 'CREATE_EVENT':
      return createEvent()
    case 'DELETE_EVENT':
      return deleteEvent()
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events
