import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import DetailedView from './pages/DetailedView'
import Edit from './pages/Edit'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/detailed-view/:id?" element={<DetailedView />} />
      <Route path="/edit/:id?" element={<Edit />} />
    </Routes>
  )
}

export default App
