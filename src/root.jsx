// Dependencies
import React from 'react'
import ReactDom from 'react-dom/client'

// Routes
import { AppRoutes } from './utils/router/routes.jsx'

//Style
import './assets/main.scss'

ReactDom.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
