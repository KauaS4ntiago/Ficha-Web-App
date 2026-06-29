import{ Route, Routes, useLocation  } from 'react-router-dom'
import  Login  from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import DashBoard from './pages/Dashboard/DashBoard'
import CharacterSheet from './pages/CharacterSheet/CharacterSheet'

function App() {

  const location = useLocation()
  
  return (
    <div className='pages'>
      <Routes key={location.pathname}>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/character/:id" element={<CharacterSheet/>}/>
      </Routes>
    </div>
  )
}

export default App
