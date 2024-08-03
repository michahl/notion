import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Pomodoro from './pages/Pomodoro.jsx'
import Clock from './pages/Clock.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route  path='/' element={<App />}/>

        <Route path='/pomodoro' element={<Pomodoro />}/>
        <Route path='/clock' element={<Clock />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
