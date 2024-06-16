// Dependencies
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

// Components
import ChatPage from '../../ui/ChatPage.jsx'

export function AppRoutes() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </HashRouter>
  )
}
