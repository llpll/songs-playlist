import './App.css'
import AddNewForm from './components/AddNewSong'
import Playlist from './components/Playlist'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  const dispatch = useDispatch()
  const playlist = useSelector((state) => state.playlistSongs)

  return (
    <div className='App'>
      <h1>My React Playlist</h1>
      <AddNewForm dispatcher={dispatch} />
      <Playlist songs={playlist} dispatcher={dispatch} />
    </div>
  )
}

function About() {
  return (
    <div className='App'>
      <h1>Hi, my name is Elena!</h1>
      <p>This is my demo app.</p>
    </div>
  )
}

export default App
