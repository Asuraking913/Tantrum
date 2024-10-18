import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Stories from './pages/stories'

function App() {

  useEffect(() => {
    document.title = "Tantrum"
  }, [])

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/stories' element={<Stories />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App