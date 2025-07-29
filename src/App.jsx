import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Home'
import Gallery from './pages/Gallery'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default App
