// Dependencies
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

// Components
import Main from '../../ui/Main.jsx'

export function AppRoutes() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  )
}
