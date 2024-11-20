import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Pokemon from './pages/Pokemon'
import FullDetails from './components/FullDetails'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Pokemon/>}></Route>
      <Route path='/details/:id/' element={<FullDetails/>}></Route>
     </Routes>
    </>
  )
}

export default App
