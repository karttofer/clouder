// Dependencies
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

// Components
import App from '../../ui/App.jsx'

export function AppRoutes() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  )
}
