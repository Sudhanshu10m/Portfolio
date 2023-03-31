import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/Home'


function App() {
  return (
    <Router>
      <Home />
      <div>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          {/* <Route index element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
