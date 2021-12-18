import React, { Component } from 'react'
import { addSong } from '../actions'

class AddNewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      artist: '',
      genre: 'Choose genre',
      rating: 'Choose rating',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addNewSong = (event) => {
    this.props.dispatcher(addSong(this.state))
    event.preventDefault()
  }

  render() {
    return (
      <div className='AddNewForm'>
        <h2> Add New Song </h2>
        <form onSubmit={this.addNewSong}>
          <input
            type='text'
            name='title'
            placeholder='Song Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='artist'
            placeholder='Artist'
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <select name='genre' onChange={this.handleChange}>
            <option value=''>Choose genre</option>
            <option value='Rock'>Rock</option>
            <option value='Pop'>Pop</option>
            <option value='Soul'>Soul</option>
            <option value='Country'>Country</option>
          </select>
          <select name='rating' onChange={this.handleChange}>
            <option value='0'>Choose Rating</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <button>Add Song</button>
        </form>
      </div>
    )
  }
}

export default AddNewForm
