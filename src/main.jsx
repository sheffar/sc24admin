import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Nav } from "./components/Nav"
import { Footer } from './components/Footer'
import { Home } from './components/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
