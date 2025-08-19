import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import NewReport from './component/NewReport'
import Archive from './component/Archive'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-report" element={<NewReport />} />
        <Route path="/archive" element={<Archive />} /> 
      </Routes>
    </Router>
  )
}

export default App
