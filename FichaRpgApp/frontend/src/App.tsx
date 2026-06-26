import{ Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <Routes>
        <Route path="/" element={<h1>login</h1>}/>
        <Route path="/register" element={<h1>register</h1>}/>
        <Route path="/dashboard" element={<h1>dashboard</h1>}/>
        <Route path="/character/:id" element={<h1>Ficha</h1>}/>
    </Routes>
  )
}

export default App
