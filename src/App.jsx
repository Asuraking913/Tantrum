import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Stories from './pages/stories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  useEffect(() => {
    document.title = "Tantrum"
  }, [])

  const queryclient = new QueryClient()
  

  return (
    <QueryClientProvider client={queryclient}>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/stories' element={<Stories />}/>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  )
}

export default App