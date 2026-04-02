import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";


import App from './App.jsx'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import ContactMe from './pages/ContactMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
