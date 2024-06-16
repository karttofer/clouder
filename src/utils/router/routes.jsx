// Dependencies
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

// Components
import ChatPage from '../../ui/ChatPage.jsx'
import LoginComponent from '../../ui/components/Auth/Login/LoginComponent.jsx'

export function AppRoutes() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/" element={<LoginComponent />} />
      </Routes>
    </HashRouter>
  )
}
