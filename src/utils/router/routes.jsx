// Dependencies
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

// Components
import ChatPage from '../../ui/ChatPage.jsx'
import LoginComponent from '../../ui/components/Auth/Login/LoginComponent.jsx'
import MagicLinkComponent from '../../ui/components/Auth/MagicLink/MagicLinkComponent.jsx'
import RegistrationComponent from '../../ui/components/Auth/Registration/RegistrationComponent.jsx'

export function AppRoutes() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/magic-link" element={<MagicLinkComponent />} />
        <Route path="/sign-up" element={<RegistrationComponent />} />
        <Route path="*" element={<LoginComponent />} />
      </Routes>
    </HashRouter>
  )
}
