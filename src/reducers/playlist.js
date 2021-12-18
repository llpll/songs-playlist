const playlistSongs = (state = [], action) => {
  let song = action.payload
  switch (action.type) {
    case 'ADD':
      song = { ...song, id: parseInt(Math.random().toString().substr(2, 3)) }
      return [...state, song]

    case 'DELETE':
      const newState = [...state]
      newState.splice(action.payload, 1)
      return newState

    default:
      return state
  }
}

export default playlistSongs
