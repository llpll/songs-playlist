import React, { Component } from 'react'
import PlaylistSong from './PlaylistSong'
import { deleteSong } from '../actions'

class Playlist extends Component {
  constructor(props) {
    super(props)
  }
  deleteSong = (index) => {
    this.props.dispatcher(deleteSong(index))
  }

  render() {
    if (this.props.songs.length > 0) {
      return (
        <div className='Playlist'>
          <h2> Current Playlist </h2>
          <table align='center'>
            <thead>
              <tr>
                <td>Song</td>
                <td>Artist</td>
                <td>Genre</td>
                <td>Rating</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {this.props.songs.map((song, index) => {
                return (
                  <PlaylistSong
                    index={index}
                    key={song.id}
                    song={song}
                    deleteSong={this.deleteSong}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className='Playlist'>
          <h2> Current Playlist </h2>
          <div>No songs added yet. Please add some using the form above...</div>
        </div>
      )
    }
  }
}

export default Playlist
