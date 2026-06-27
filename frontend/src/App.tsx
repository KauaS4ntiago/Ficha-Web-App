import{ Route, Routes } from 'react-router-dom'
import  Login  from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<h1>dashboard</h1>}/>
        <Route path="/character/:id" element={<h1>Ficha</h1>}/>
    </Routes>
  )
}

export default App
