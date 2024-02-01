import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ShowList from './components/ShowList'
import ShowDetails from './components/ShowDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ShowList />} />
      <Route path="/show/:id" element={<ShowDetails />} />
    </Routes>
  )
}

export default App
