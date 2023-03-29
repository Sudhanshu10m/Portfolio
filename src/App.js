import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout'

function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />} />
        </Routes>
      </Router>
    
  )
}

export default App
