import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { HOME_URL, LOGIN_URL, REGISTER_URL } from './constants/urls/urls'
import { HomePage } from './pages/HomePage/HomePage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path={HOME_URL} element={<HomePage />}/>
        <Route path={LOGIN_URL} element={<LoginPage />}/>
        <Route path={REGISTER_URL} element={<RegisterPage />}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
