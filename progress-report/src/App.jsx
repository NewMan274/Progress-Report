import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import NewReport from './component/NewReport'
import Archive from './component/Archive'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-report" element={<NewReport />} />
        <Route path="/archive" element={<Archive />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
