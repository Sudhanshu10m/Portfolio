import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/Home'
import Sidebar from './components/Sidebar/side'
import Project from './components/Projects/projects'

function App() {
  return (
    <Router>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route index element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
