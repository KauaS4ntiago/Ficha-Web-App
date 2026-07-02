import { Route, Routes, useLocation } from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import { useEffect, useState } from 'react'
import Register from '../src/pages/Register/Register'
import DashBoard from './pages/Dashboard/DashBoard'
import CharacterSheet from './pages/CharacterSheet/CharacterSheet'
import SplashScreen from './pages/SplashScreen/SplashScreen'

function App() {

  const location = useLocation()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

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