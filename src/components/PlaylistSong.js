import React from 'react'

function PlaylistSong(props) {
  return (
    <tr id={props.song.id} className='list-song'>
      <td>{props.song.title}</td>
      <td>{props.song.artist}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td>
        <button
          className='deleteBtn'
          onClick={() => {
            props.deleteSong(props.index)
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default PlaylistSong
