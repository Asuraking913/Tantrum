import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {

  useEffect(() => {
    document.title = "Tantrum"
  }, [])

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App