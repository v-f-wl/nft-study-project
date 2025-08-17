import { 
  Route,
  BrowserRouter as Router,
  Routes 
} from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
