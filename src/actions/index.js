export const addSong = (song) => {
  return {
    type: 'ADD',
    payload: song,
  }
}

export const deleteSong = (index) => {
  return {
    type: 'DELETE',
    payload: index,
  }
}
