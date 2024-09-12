import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    
    <div className='container bg-slate-400'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
    </Routes>
    </div>
   
    </>
  )
}

export default App